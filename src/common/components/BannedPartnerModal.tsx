import { FunctionComponent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { StudentData } from './Student';

const BannedPartnerModal: FunctionComponent<{
    currentlyEditedStudent: StudentData;
    students: StudentData[];
    isOpen: boolean;
    onSave: (studentIDs: number[]) => void;
    onCancel: () => void;
}> = ({ students, currentlyEditedStudent, isOpen, onSave, onCancel }) => {
    const [selectedStudentIDs, setSelectedStudentIDs] = useState<number[]>([]);

    return (
        <Modal
            show={isOpen}
            onHide={onCancel}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {currentlyEditedStudent.first} {currentlyEditedStudent.last}
                    's Banned Partners
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>John</td>
                            <td>Smith</td>
                            <td>Jane Smith, Smith Jones</td>
                            <td>(Example)</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onCancel()}>
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => onSave(selectedStudentIDs)}
                >
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BannedPartnerModal;