import './PersonEntityList.css';

const PersonEntityList = ({personEntities = [], 
  personEntityKeys = ['Name', 'Identification Document', 'Company']}) => {

  return (
      <><thead>
      <tr>
        {personEntityKeys && personEntityKeys.map((key) => (
          <th>{key}</th>
        ))}
      </tr>
    </thead><tbody>
       {personEntities && personEntities.map((entity)=> (
          <tr>
          <td>{entity.name}</td>
          <td>{entity.idDocument}</td>
          <td>{entity.isCompany === true ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody></>
  );
}

export default PersonEntityList;