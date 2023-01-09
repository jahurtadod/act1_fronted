import "./BtnIcon.css";

function BtnIcon({ icon }) {
  return (
    <div className="btn">
      <span>Agregar</span>
      {icon}
    </div>
  );
}

export { BtnIcon };
