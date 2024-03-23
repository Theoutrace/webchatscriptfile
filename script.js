function prepareFrame() {
  var customValue = document.currentScript.getAttribute(
    "data-custom-value-web-chat-app"
  );
  // Retrieve parent site URL
  var parentSiteURL = window.location.href;
  let isChat = false;

  try {
    var iframe = document.createElement("iframe");
    var chatButton = document.createElement("button");
    chatButton.innerText = "Chat";

    chatButton.setAttribute(
      "style",
      "position: fixed; cursor:pointer; bottom: 40px; right: 40px;height:60px; width: 60px; background-color:#000;border-radius:8px;color:white; outline: none;border:none"
    );
    iframe.setAttribute("style", "display:none");
    chatButton.setAttribute("id", "iframe_web_chat_button_id");
    chatButton.addEventListener("click", function () {
      if (!isChat) {
        iframe.setAttribute("src", `https://main--nextwebchat.netlify.app`);
        iframe.setAttribute(
          "style",
          "position: fixed; bottom: 100px; right: 30px; max-height: 500px; height:100%; max-width: 400px;width: 100%;border:none"
        );
        isChat = true;
      } else {
        iframe.setAttribute("style", "display: none;");
        isChat = false;
      }
    });

    // Set iframe attributes
    // iframe.setAttribute(
    //   "src",
    //   `https://main--sitewebchat.netlify.app/?client=${customValue}&parentURL=${encodeURIComponent(
    //     parentSiteURL
    //   )}`
    // );

    iframe.setAttribute("id", "iframe_web_chat_id");

    document.body.appendChild(iframe);
    document.body.appendChild(chatButton);
  } catch (error) {
    console.error("Error while creating iframe:", error);
  }
}

// Call the function to prepare the frame
prepareFrame();
