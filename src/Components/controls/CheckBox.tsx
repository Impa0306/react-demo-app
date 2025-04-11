import "./CheckBox.scss";

interface Props {
  checked: boolean;
  className?: string;
  //label?: string,
  onChange?: any;
  readOnly?: boolean;
}

const CheckBox: React.FC<Props> = ({
  checked,
  className,
  onChange,
  readOnly,
}) => {
  return (
    <>
      <input
        type="checkbox"
        className={className}
        checked={checked}
        onChange={onChange}
        readOnly={readOnly}
      ></input>
    </>
  );
};

export default CheckBox;
