import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function DropdownButton() {
  return (
    <Dropdown className='m-4'>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        CATEGORIAS
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/products/limpieza">Limpieza</Dropdown.Item>
        <Dropdown.Item as={Link} to="/products/accesorios">Accesorios</Dropdown.Item>
        <Dropdown.Item as={Link} to="/products/mecanica">Mecanica</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;