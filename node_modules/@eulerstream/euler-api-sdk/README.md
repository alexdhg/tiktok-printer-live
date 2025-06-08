# EulerStream API SDK

This is an API wrapper for the Euler Stream API written in TypeScript. 
With this API you can access any Euler Stream public endpoint. 

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/isaackogan/)
[![Patrons](https://www.eulerstream.com/api/pips/patrons?v=002)](https://www.eulerstream.com/)
![Connections](https://tiktok.eulerstream.com/analytics/pips/1)
![Downloads](https://img.shields.io/npm/dy/@eulerstream/euler-api-sdk)
![Stars](https://img.shields.io/github/stars/EulerStream/EulerApiSdk?style=flat&color=0274b5&alt=1)
![Issues](https://img.shields.io/github/issues/EulerStream/EulerApiSdk)


## Enterprise Solutions

<table>
<tr>
    <td><br/><img width="180px" style="border-radius: 10px" src="https://raw.githubusercontent.com/isaackogan/TikTokLive/master/.github/SquareLogo.png"><br/><br/></td>
    <td>
        <a href="https://www.eulerstream.com">
            <strong>Euler Stream</strong> is a paid TikTok LIVE service providing managed TikTok LIVE WebSocket connections, increased access, TikTok LIVE alerts, JWT authentication and more.
        </a>
    </td>
</tr>
</table>


## Community

Join the [EulerStream discord](https://www.eulerstream.com/discord) for questions, concerns, or just a good chat.

## Getting Started

Getting started is super simple! Remember to check out the OpenAPI Spec on the Euler Stream website at https://www.eulerstream.com/docs/openapi. 

For your convenience, we have included a hello-world example using this SDK:

1. Install the package with `npm i @eulerstream/euler-api-sdk`
2. Run the script below:


```ts
import EulerStreamApiClient, {IListAlertsResponse, IPipResponse} from "@eulerstream/euler-api-sdk";
import {AxiosResponse} from "axios";

// Initialize the client
const client = new EulerStreamApiClient(
    {apiKey: 'YOUR_API_KEY'}
);

// Fetch an endpoint
client.webcast.fetchWebcastURL('ttlive-node', undefined, 'tv_asahi_news').then((res: AxiosResponse<any>) => console.log("Got Webcast Fetch:", res.status, "Length:", JSON.stringify(res?.data).length));
```
