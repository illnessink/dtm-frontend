function Chat (props) {
    return (
    <div className="chat-feature" >
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </div> 
    );
  }
  
  export default Chat;