import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Base from '../../views/components/layouts/Base';
import '../../css/Style_preguntas.css';
import db_Pregunta_R from '../../data/db_Pregunta_R';  // Asegúrate de importar db_Pregunta_R

const PreguntaPage = () => {
  const [filter, setFilter] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredPreguntas = db_Pregunta_R.filter((pregunta) => {
    if (filter === 'All') {
      return true;
    }
    if (filter === 'Cuantitativa') {
      return pregunta.tipo === 'Cuantitativa';
    }
    if (filter === 'Cualitativa') {
      return pregunta.tipo === 'Cualitativa';
    }
    if (filter === 'Discreta') {
      return pregunta.naturaleza === 'Discreta';
    }
    if (filter === 'Continua') {
      return pregunta.naturaleza === 'Continua';
    }
    if (filter === 'Nominal') {
      return pregunta.naturaleza === 'Nominal';
    }
    if (filter === 'Ordinal') {
      return pregunta.naturaleza === 'Ordinal';
    }
    return true;
  });

  return (
    <Base>
      {() => (
        <div className="container-lg fondo_P">
          <h1>Preguntas de la Encuesta</h1>
          <div className="mb-4">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>
                Filtrar por tipo de pregunta
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleFilterChange('All')}>Todas</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Cuantitativa')}>Cuantitativas</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Cualitativa')}>Cualitativas</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Discreta')}>Cuantitativa Discreta</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Continua')}>Cuantitativa Continua</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Nominal')}>Cualitativa Nominal</DropdownItem>
                <DropdownItem onClick={() => handleFilterChange('Ordinal')}>Cualitativa Ordinal</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="row">
            {filteredPreguntas.map((pregunta) => (
              <div className="col-md-4 mb-4" key={pregunta.id}>
                <Card className="text-center">
                  <CardBody>
                    <CardTitle tag="h5">{pregunta.id}.{pregunta.pregunta}</CardTitle>
                    <Link to={`/pregunta/${pregunta.link}`} className="text-decoration-none">
                      <Button color="primary">
                        Ver Respuestas
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </Base>
  );
};

export default PreguntaPage;
