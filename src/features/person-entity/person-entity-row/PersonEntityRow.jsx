import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const PersonEntityRow = ({ entity, handleUpdateEntity }) => {

  const handleUpdate = (e) => {

    entity.isActive = entity.isActive ? false : true;
    e.preventDefault();
    handleUpdateEntity(entity);
  }

  return (
    <tr>
      <td>{entity.name}</td>
      <td>{entity.idDocument}</td>
      <td>{entity.isCompany === true ? 'Yes' : 'No'}</td>
      <td><button onClick={handleUpdate}>{entity.isActive ? <FaToggleOn /> : <FaToggleOff />}</button></td>
    </tr>
  );
}

export default PersonEntityRow;