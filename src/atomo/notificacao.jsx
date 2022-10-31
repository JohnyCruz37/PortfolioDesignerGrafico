//CSS
import './notificacao.css'

const Notificacao = (props) => {
  return (
    <div
      id={props.id}
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <div className="rounded me-2 icone">{props.icone}</div>
        <strong className="me-auto titulo-alerta"> {props.titulo} </strong>
        <small className="text-muted"> {props.data} </small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body"> {props.msg} </div>
    </div>
  );
};

export default Notificacao;
