import React, { useState } from 'react';
import './StudentTable.css'; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const StudentTable = ({ students, updateStatus }) => {
  const [editingId, setEditingId] = useState(null); // Track which student is being edited
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  // Filter students based on search term
  const filteredStudents = students.filter(
    (student) =>
      `${student.firstname} ${student.lastname}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.contacts.includes(searchTerm)
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleStatusChange = (id, newStatus) => {
    setEditingId(id); // Show dropdown for selected student
    setSelectedStatus(newStatus); // Set selected status
  };

  const handleStatusUpdate = (id) => {
    updateStatus(id, selectedStatus); // Update status in backend
    setEditingId(null); // Close dropdown after update
  };

  return (
    <div className='table-container'>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search Student..'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />
        <span className='search-icon'>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contacts</th>
            <th>Program</th>
            <th>Tuition</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{`${student.firstname} ${student.lastname}`}</td>
              <td>{student.contacts}</td>
              <td>{student.program_name}</td>
              <td>{student.tuition_fee}</td>
              <td>{student.balance}</td>
              <td>
                {editingId === student.id ? (
                  <select
                    value={selectedStatus}
                    className='status-dropdown'
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value='completed'>Completed</option>
                    <option value='travelled'>Travelled</option>
                    <option value='not completed'>Not Completed</option>
                  </select>
                ) : (
                  <span
                    className={`status-label ${student.status.replace(
                      ' ',
                      '-'
                    )}`}
                  >
                    {student.status}
                  </span>
                )}
              </td>
              <td>
                {editingId === student.id ? (
                  <button
                    className='btn save-btn'
                    onClick={() => handleStatusUpdate(student.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className='btn edit-btn'
                    onClick={() =>
                      handleStatusChange(student.id, student.status)
                    }
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className='pagination'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StudentTable;
