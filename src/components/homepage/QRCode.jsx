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

/*import { useSpring, animated } from 'react-spring';

function QRCode() {
    const [isOpen, setIsOpen] = useState(false);
    const springProps = useSpring({
        from: { transform: 'translateX(100%)' },
        to: { transform: isOpen ? 'translateX(0%)' : 'translateX(100%)' },
    });

    function openForm() {
        setIsOpen(true);
    }

    function closeForm() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className="open-button" onClick={openForm}>Open Form</button>
            <animated.div className="form-popup" id="myForm" style={springProps}>
                <form action="/action_page.php" className="form-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/220px-Red_square.svg.png" alt="Red Square" />
                    <button type="button" className="btn cancel" onClick={closeForm}>Close</button>
                </form>
            </animated.div>
        </div>
    );
}
export default QRCode;*/
