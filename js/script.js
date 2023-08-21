(async function () {
  const res = await fetch(
    "https://directline.botframework.com/v3/directline/tokens/generate",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer WMlxBa3XhJk.Sy4F3AT_e-g8ZIdywkpWJmCgI9HFjKfhVqDWcPWUVS4",
      },
    }
  );

  const { token } = await res.json();

  // Set CSS rules
  const styleSet = window.WebChat.createStyleSet({
    backgroundColor: "#B0A8B9",
    bubbleBackground: "white",
    bubbleBorderRadius: 20,
    bubbleFromUserBackground: "white",
    bubbleFromUserBorderRadius: 20,
    sendBoxHeight: 30,
    sendBoxBorderBottom: "solid 1px #B0A8B9",
    groupTimestamp: true,
  });

  // Change css style
  styleSet.textContent = {
    ...styleSet.textContent,
    fontFamily: "'Courier', 'Arial', sans-serif",
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  const avatarOptions = {
    botAvatarInitials: "AB",
    userAvatarInitials: "YOU",
  };

  // Initiate the bot
  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token }),
      styleSet,
      styleOptions: avatarOptions,
    },
    document.getElementById("webchat")
  );

  document.querySelector("#webchat > *").focus();
})().catch((err) => console.error(err));
