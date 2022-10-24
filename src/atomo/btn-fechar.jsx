import "./btn-fechar.css"

const BtnFechar = (props) => {
    return (
      <button
                  type="button"
                  className="btn-close fechar-modal"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={props.fechar}
                ></button>
    )
}

export default BtnFechar;