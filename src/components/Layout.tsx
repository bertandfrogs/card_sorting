import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <h1>BYU Undergraduate Catalog</h1>
        <nav>
          <div className="menu-icon">☰</div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">{children}</main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 BYU | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Layout;
