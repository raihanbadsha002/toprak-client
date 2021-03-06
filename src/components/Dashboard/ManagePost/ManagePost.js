import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import TableSpinner from "../../Spinner/Spinner";
import AddAPost from "../AddAPost/AddAPost";

const ManagePost = () => {
  const url = "https://toprakserver.herokuapp.com/property/all-post";
  const [allPost, setAllPost] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPost(data));
  }, []);

  return (
    <>
      <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
        {allPost.length > 0 ? (
          <Table className="table-style" hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Sl. No</th>
                <th>Service</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {allPost.map((post, index) => {
              return (
                <tbody key={post._id} style={{ fontWeight: "500" }}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{post.name}</td>
                    <td>৳ {post.price}</td>
                    <td className="text-center">
                      <div className="d-flex">
                        {/* <Button
                          variant="outline-secondary"
                          className="p-1 mb-0 me-2"
                        >
                          Add To Best Property
                        </Button> */}
                        <Button
                          variant="outline-success"
                          className="p-1 mb-0 me-2"
                          onClick={() => setShow(true)}
                        >
                          Edit Property{" "}
                        </Button>
                        <Button
                          variant="outline-danger"
                          className="p-1 ml-3 mb-0"
                          onClick={"() => handleDeleteService(post._id)"}
                        >
                          Delete Property{" "}
                        </Button>
                      </div>
                      <>
                        <Modal centered show={show} size='lg'>
                          <Modal.Header >
                            <Modal.Title className="text-center mt-2 text-success">Update Property</Modal.Title>
                            <Button onClick={() => setShow(false)}>Close</Button>
                          </Modal.Header>
                          <Modal.Body >
                            <AddAPost />
                          </Modal.Body>
                        </Modal>
                      </>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        ) : (
          <TableSpinner />
        )}
      </div>
    </>
  );
};

export default ManagePost;
