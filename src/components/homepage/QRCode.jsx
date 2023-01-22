import '../../styles/QRCode.css';
import qr from '../../assets/qr.png'
import chatBlack from '../../assets/Chat_black.png'
import chatWhite from '../../assets/Chat_white.png'

function QRCode() {
  function openForm() {
    document.getElementById('myForm').style.display = 'block';
  }

  function closeForm() {
    document.getElementById('myForm').style.display = 'none';
  }

  return (
    <div>
      <img
        className="open-button"
        id="icon"
        onClick={openForm}
        src={chatBlack}
      ></img>
      <div className="form-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <p className="popup-text">
            Chat with Miu to find the right phoneline for you.
          </p>
          <img class="qrcode" src={qr} />
          <img
            type="button"
            id="icon"
            className="btn cancel"
            onClick={closeForm}
            src={chatWhite}
          ></img>
        </form>
      </div>
    </div>
  );
}
export default QRCode;
