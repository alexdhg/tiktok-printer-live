import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { TikTokConnectionWrapper, getGlobalConnectionCount } from './connectionWrapper.js';
import { WebcastEvent } from 'tiktok-live-connector';

const app = express();
const httpServer = createServer(app);

// Enable cross origin resource sharing
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    let tiktokConnectionWrapper;

    socket.on('setUniqueId', (uniqueId, options) => {

        // Prohibit the client from specifying these options (for security reasons)
        if (typeof options === 'object') {
            delete options.requestOptions;
            delete options.websocketOptions;
        }

        // Is the client already connected to a stream? => Disconnect
        if (tiktokConnectionWrapper) {
            tiktokConnectionWrapper.disconnect();
        }

        // Connect to the given username (uniqueId)
        try {
            tiktokConnectionWrapper = new TikTokConnectionWrapper(uniqueId, options, true);
            tiktokConnectionWrapper.connect();            
        } catch(err) {
            socket.emit('disconnected', err.toString());
            return;
        }

        // Redirect wrapper control events once
        tiktokConnectionWrapper.once('connected', state => socket.emit('tiktokConnected', state));
        tiktokConnectionWrapper.once('disconnected', reason => socket.emit('tiktokDisconnected', reason));

        // Notify client when stream ends
        tiktokConnectionWrapper.connection.on(WebcastEvent.STREAM_END, () => socket.emit('streamEnd'));

        // Redirect message events using new WebcastEvent enum
        tiktokConnectionWrapper.connection.on(WebcastEvent.ROOM_USER, msg => socket.emit('roomUser', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.MEMBER, msg => socket.emit('member', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.CHAT, msg => socket.emit('chat', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.GIFT, msg => socket.emit('gift', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.SOCIAL, msg => socket.emit('social', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.LIKE, msg => socket.emit('like', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.QUESTION_NEW, msg => socket.emit('questionNew', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.LINK_MIC_BATTLE, msg => socket.emit('linkMicBattle', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.LINK_MIC_ARMIES, msg => socket.emit('linkMicArmies', msg));
        tiktokConnectionWrapper.connection.on(WebcastEvent.LIVE_INTRO, msg => socket.emit('liveIntro', msg));
    });

    socket.on('disconnect', () => {
        if(tiktokConnectionWrapper) {
            tiktokConnectionWrapper.disconnect();
        }
    });
});

// Emit global connection statistics
setInterval(() => {
    io.emit('statistic', { globalConnectionCount: getGlobalConnectionCount() });
}, 5000)

// Serve frontend files
app.use(express.static('public'));

// Start http listener
const port = process.env.PORT || 8081;
httpServer.listen(port);
console.info(`Server running! Please visit http://localhost:${port}`);