import './Modal.scss';

const Modal = ({
  children, title, visible, close, hiddenModal,
}) => {
  const clazz = `modal-overlay ${visible ? 'block' : 'hidden'}`;

  return (
    <div className={clazz}>
      <div className="modal fixed top-1/2 left-1/2 bg-black text-white ">
        <div className="text-right">
          {close ? <button onClick={hiddenModal} type="button"> X </button> : null}
        </div>
        <h2 className="text-center text-x1 bold ">{title}</h2>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Modal;

/*
const Modal =({childre}) =>(
  <div>
  {children}
  </div>
);

export default Modal;
*/
