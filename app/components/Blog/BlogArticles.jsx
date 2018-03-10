import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';

const BlogArticles = () => (
    <ContentWrapper>
        <div className="content-heading">Articles</div>
        <Panel header="Blog articles manager">
            <Table id="datatable1" responsive striped hover>
                <thead>
                    <tr>
                        <th className="wd-md">Post title</th>
                        <th>Author</th>
                        <th>Categories</th>
                        <th>Tags</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Comments</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="">AngularJS</a>
                        </td>
                        <td><a href="">Keith Gutierrez</a>
                        </td>
                        <td><a href="" className="mr">HTML5</a><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">angularjs</a><a href="" className="mr-sm label label-primary">mvc</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1251</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">MeteorJs and Angularjs</a>
                        </td>
                        <td><a href="">Carlos Wilson</a>
                        </td>
                        <td><a href="" className="mr">WEB</a><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">angularjs</a><a href="" className="mr-sm label label-primary">node</a><a href="" className="mr-sm label label-primary">meteor</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1361</td>
                        <td><a href="" className="mr-sm label label-warning">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Working with ExpressJS </a>
                        </td>
                        <td><a href="">Carlos Wilson</a>
                        </td>
                        <td><a href="" className="mr">SERVER</a><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">expressJS</a><a href="" className="mr-sm label label-primary">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Abstract object styles</a>
                        </td>
                        <td><a href="">Carlos Wilson</a>
                        </td>
                        <td><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Animating progress bars</a>
                        </td>
                        <td><a href="">Clyde Bailey</a>
                        </td>
                        <td><a href="" className="mr">BOOTSTRAP</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">css</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-danger">Deleted</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Contextual alternatives</a>
                        </td>
                        <td><a href="">Tracy Black</a>
                        </td>
                        <td><a href="" className="mr">BOOTSTRAP</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">less</a><a href="" className="mr-sm label label-primary">sass</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-warning">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Responsive embed</a>
                        </td>
                        <td><a href="">Brittany Harrison</a>
                        </td>
                        <td><a href="" className="mr">FOUNDATION</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">techniques</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-default">Draft</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Digging into AngularJS</a>
                        </td>
                        <td><a href="">Keith Gutierrez</a>
                        </td>
                        <td><a href="" className="mr">HTML5</a><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">angularjs</a><a href="" className="mr-sm label label-primary">mvc</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Application with MeteorJs and Angularjs</a>
                        </td>
                        <td><a href="">Nevaeh Hunter</a>
                        </td>
                        <td><a href="" className="mr">WEB</a><a href="">SERVER</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">angularjs</a><a href="" className="mr-sm label label-primary">node</a><a href="" className="mr-sm label label-primary">meteor</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-warning">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Introduction to ExpressJS </a>
                        </td>
                        <td><a href="">Carlos Wilson</a>
                        </td>
                        <td><a href="" className="mr">SERVER</a><a href="">JAVASCRIPT</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">expressJS</a><a href="" className="mr-sm label label-primary">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Optional classes</a>
                        </td>
                        <td><a href="">Peter Lucas</a>
                        </td>
                        <td><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">node</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>125</td>
                        <td><a href="" className="mr-sm label label-success">Public</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Typical user actions</a>
                        </td>
                        <td><a href="">Clyde Bailey</a>
                        </td>
                        <td><a href="" className="mr">BOOTSTRAP</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">css</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1471</td>
                        <td><a href="" className="mr-sm label label-danger">Deleted</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">A lightweight, flexible component</a>
                        </td>
                        <td><a href="">Brittany Harrison</a>
                        </td>
                        <td><a href="" className="mr">BOOTSTRAP</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">less</a><a href="" className="mr-sm label label-primary">sass</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1581</td>
                        <td><a href="" className="mr-sm label label-warning">Pending</a>
                        </td>
                    </tr>
                    <tr>
                        <td><a href="">Highlight new or unread items </a>
                        </td>
                        <td><a href="">Abigail Phillips</a>
                        </td>
                        <td><a href="" className="mr">FOUNDATION</a><a href="">WEB</a>
                        </td>
                        <td> <a href="" className="mr-sm label label-primary">coding</a><a href="" className="mr-sm label label-primary">techniques</a>
                        </td>
                        <td>10/05/2015</td>
                        <td>10/05/2015</td>
                        <td>1691</td>
                        <td><a href="" className="mr-sm label label-default">Draft</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Panel>
    </ContentWrapper>
);

export default BlogArticles;
