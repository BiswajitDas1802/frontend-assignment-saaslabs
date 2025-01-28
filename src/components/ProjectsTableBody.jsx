import React from "react";

const ProjectsTableBody = ({ data, currentPage, recordsPerPage, expandedRows, onToggleExpand }) => (
  <tbody>
    {data.map((project, index) => {
      const isExpanded = expandedRows[index];

      return (
        <tr key={index}>
          <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
          <td>{project.title}</td>
          <td>
            {isExpanded || project.blurb.length <= 30 ? (
              <span>{project.blurb}</span>
            ) : (
              <span>
                {`${project.blurb.substring(0, 30)}...`}
                <button
                  className="expand-btn"
                  onClick={() => onToggleExpand(index)}
                >
                  Expand
                </button>
              </span>
            )}
          </td>
          <td>{project.by}</td>
          <td>{project.location}</td>
          <td>{project["percentage.funded"]}%</td>
          <td>${project["amt.pledged"].toLocaleString()}</td>
        </tr>
      );
    })}
  </tbody>
);

export default ProjectsTableBody;