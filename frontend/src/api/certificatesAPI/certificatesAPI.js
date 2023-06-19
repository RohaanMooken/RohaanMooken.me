import { Link } from 'react-bootstrap-icons';
import './certificatesAPI.css';
import React from 'react';
import axios from 'axios';

class CertificatesAPI extends React.Component {

  state = { details: [], }

  componentDidMount() {

    let data;
    axios.get('http://localhost:8000/certificates')
      .then(res => {
        data = res.data
        this.setState({
          details: data
        });
      })
      .catch(err => { console.log("[ERROR] ", err)});
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Certificate</th>
            <th scope='col' className='tdSecond'>Origin</th>
            <th scope='col' className='tdThird'>Issued</th>
          </tr>
        </thead>
        <tbody>
          {this.state.details.map((output, id) => (
            <tr>
              <td>
                <a className='link' href='https://www.linkedin.com/in/rohaan-mooken-40755324a/details/certifications/'>
                  <Link className="linkIcon" size={30}/>
                  {output.certificate_name}
                </a>
              </td>
              <td className='tdSecond'>{output.certificate_origin}</td>
              <td className='tdThird'>{output.certificate_issued}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default CertificatesAPI;