import '../../styles/QRCode.css';

function QRCode() {
    
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      };
      
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
        }
        
    return (
        <div>
            <img className="open-button" id = "icon" onClick={openForm} src = "src/assets/Chat_black.png"></img>
        <div className="form-popup" id="myForm">
          <form action="/action_page.php" className="form-container">
            <p>Chat with Miu to find the right phoneline for you.</p>
            <img class="qrcode" src="src/assets/qr.png"/>
            <img type = "button" id = "icon" className="btn cancel" onClick={closeForm} src = "src/assets/Chat_white.png"></img>
          </form>
        </div>
      </div>
    );
  }
  export default QRCode;