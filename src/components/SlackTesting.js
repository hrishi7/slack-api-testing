import React, { useEffect } from "react";
import { WebClient, LogLevel } from "@slack/web-api";

function SlackTesting() {
  const client = new WebClient(
    "xoxb-1986076174020-1992680574129-VE7aFeFXUpY4WQG9OQEE9P0S",
    {
      // LogLevel can be imported and used to make debugging simpler
      logLevel: LogLevel.DEBUG,
    }
  );

  useEffect(() => {
    // getAllChannels();
    // postNewMessage();
    // getHistoryConversationForAChannel();
    // updateMessage();
    // gettingAllReplies();
    // postReply();
  }, []);

  const postNewMessage = async () => {
    // ID of the channel you want to send the message to
    const channelId = "C01V6FF35S5";

    try {
      // Call the chat.postMessage method using the WebClient
      const result = await client.chat.postMessage({
        channel: channelId,
        text: "Hello world to general channel",
      });

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllChannels = async () => {
    let conversationsStore = {};

    // Call the conversations.list method using the WebClient
    const result = await client.conversations.list();

    console.log(result.channels);
    let conversationId = "";

    result.channels.forEach(function (conversation) {
      // Key conversation info on its unique ID
      conversationId = conversation["id"];

      // Store the entire conversation object (you may not need all of the info)
      conversationsStore[conversationId] = conversation;
    });
  };

  const getHistoryConversationForAChannel = async() =>{
    let channelId ="C01V6FF35S5";
    const result = await client.conversations.history({
      channel: channelId,
      cursor:"bmV4dF90czoxNjE4OTAwMDY4MDAwNDAw",
      limit:2
    });
    console.log(result);
  }

  const updateMessage = async() =>{
    let channelId = "C01V6FF35S5";
    let timeStampOfMessage = "1618900190.000600"
    let updatedText = 'this is updated message';
    let result = await client.chat.update({
      channel:channelId,
      ts:timeStampOfMessage,
      text:updatedText
    });
    console.log(result);
  }

  const gettingAllReplies = async() =>{
    let channelId = "C01V6FF35S5";
    let timeStampOfMessage = "1618900112.000500";
    let limit = 10;
    let cursor = "";

    let result = await client.conversations.replies({
      channel:channelId,
      ts:timeStampOfMessage,
      limit:limit,
      cursor:cursor
    });
    console.log(result);
  }

  const postReply = async() =>{
    let channelId = "C01V6FF35S5";
    let parentThreadTimeStamp = "1618900112.000500";
    let replyMessage = "this is reply message";

    let result = await client.chat.postMessage({
      channel: channelId,
      thread_ts: parentThreadTimeStamp,
      text: replyMessage
    });

    console.log(result);
    
  }

  return <div>Testing page</div>;
}

export default SlackTesting;
