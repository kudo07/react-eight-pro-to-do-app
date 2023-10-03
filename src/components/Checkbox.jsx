function Checkbox(props) {
  // const [checked, setCheck] = useState(props.defaultChecked);
  return (
    <div onClick={props.onClick}>
      {!props.checked && (
        <div className="checkbox unchecked">
          <i className="fa-solid fa-square"></i>
        </div>
      )}

      {props.checked && (
        <div className="checkbox checked">
          <i className="fa-solid fa-square-check"></i>
        </div>
      )}
    </div>
  );
}

export default Checkbox;
