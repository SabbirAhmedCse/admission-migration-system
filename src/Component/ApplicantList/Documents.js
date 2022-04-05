import React from 'react';
import { Input, Table } from 'reactstrap';

const Documents = () => {
    return (
        <div>
            <Table hover borderless className="border">
                  <thead>
                    <tr>
                      <th>Documents</th>
                      <th>Submit</th>
                      <th>Submit Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">S.S.C Markseet</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">H.S.C Markseet</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Admission Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">GST AdmitCard</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Subject Selection Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Testimonial</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Registration Form</th>
                      <td>
                        <Input type="checkbox" />
                      </td>
                      <td>
                        <Input
                          id="exampleDate"
                          name="date"
                          placeholder="date placeholder"
                          type="date"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
        </div>
    );
};

export default Documents;