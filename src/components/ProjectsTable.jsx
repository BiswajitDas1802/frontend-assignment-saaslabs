import React, { useState, useEffect } from "react";
import ProjectsTableHeader from "./ProjectsTableHeader";
import ProjectsTableBody from "./ProjectsTableBody";
import Pagination from "./Pagination";
import "./styles/ProjectsTable.css";

const ProjectsTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState({});
  const recordsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / recordsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleExpandRow = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="projects-table-container">
      <h1 className="title">Projects</h1>
      <table className="projects-table">
        <ProjectsTableHeader />
        <ProjectsTableBody 
          data={currentData} 
          currentPage={currentPage} 
          recordsPerPage={recordsPerPage} 
          expandedRows={expandedRows}
          onToggleExpand={toggleExpandRow}
        />
      </table>
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default ProjectsTable;