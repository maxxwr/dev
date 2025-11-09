import { Nav } from "react-bootstrap";

export const ProjectsTabsNav = () => {
  const tabs = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "mobile", label: "Moviles" },
    { key: "ai", label: "IA / DL" },
  ];

  return (
    <Nav
      variant="pills"
      className="nav-pills mb-5 justify-content-center align-items-center w-100"
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
      }}
    >
      {tabs.map((tab, index) => (
        <Nav.Item key={index}>
          <Nav.Link
            eventKey={tab.key}
            id={`projects-tabs-tab-${index + 1}`}
          >
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  )
}
