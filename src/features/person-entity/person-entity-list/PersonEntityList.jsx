import './PersonEntityList.css';
import PersonEntityRow from '../person-entity-row/PersonEntityRow';

const PersonEntityList = ({ personEntities = [],
  personEntityKeys = ['Name', 'Identification Document', 'Company', 'Active'], handleUpdateEntity}) => {

  return (
    <><thead>
      <tr>
        {personEntityKeys && personEntityKeys.map((key) => (
          <th>{key}</th>
        ))}
      </tr>
    </thead><tbody>
        {personEntities && personEntities.map((entity) => (
          <PersonEntityRow entity={entity} handleUpdateEntity={handleUpdateEntity} />
        ))}
      </tbody></>
  );
}

export default PersonEntityList;