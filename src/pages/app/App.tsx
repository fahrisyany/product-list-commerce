import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, sortData } from '../../redux/actions/datas'
import { RootState } from '../../redux/reducers'
import CardItem from '../../components/cardItem/CardItem'
import { Container, Row, Col } from 'react-bootstrap'
import catchLogo from '../../images/catch-logo.svg'
import DropdownCustom, { DropdownValueType } from '../../components/dropdownCustom/DropdownCustom'
import { GlobalStateInterface } from "../../interfaces/sagas.interface";
import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { datas, loading, error }: GlobalStateInterface = useSelector((state: RootState) => state.datasReducer);
  const [sortValue, setsortValue] = useState<string>("popular")

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);

  const handleSortItems = (value: DropdownValueType) => {
    setsortValue(value)
    dispatch(sortData(value))
  }

  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between align-items-center flex-wrap">
        <img src={catchLogo} alt="catch-logo" className='logo-main' />
        <DropdownCustom sortValue={sortValue} handleSortItems={handleSortItems} />
      </header>
      <main className="App-body">
        <Container fluid>
          <Row className="justify-content-center">
            {datas.length > 0 && datas.map((item, i) => {
              return (
                <Col key={i} xs={'auto'} md={4} lg={2} xl={2}><CardItem {...item} /> </Col>
              )
            })}
          </Row>
        </Container>
        {!loading && datas.length === 0 && <p>no data found</p>}
        {error && !loading && <p>Error Fetching Data</p>}
      </main>
    </div>
  );
}

export default App;
