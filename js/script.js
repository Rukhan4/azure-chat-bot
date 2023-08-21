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
    backgroundColor: "#FFD580",
    bubbleBackground: "white",
  });

  window.WebChat.renderWebChat(
    {
      directLine: window.WebChat.createDirectLine({ token }),
      styleSet,
    },
    document.getElementById("webchat")
  );

  document.querySelector("#webchat > *").focus();
})().catch((err) => console.error(err));
