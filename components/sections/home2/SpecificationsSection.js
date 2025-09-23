'use client'
import React, { useState, useMemo } from "react";
import { 
  Home, 
  Palette, 
  Zap, 
  Droplets, 
  DoorOpen, 
  Shield,
  CheckCircle,
  Search,
  Filter,
  X
} from "lucide-react";

const specifications = {
  structure: {
    title: "Structure & Construction",
    icon: Home,
    items: [
      "RCC framed structure with lateral wall for exterior",
      "Concrete block wall for internal walls",
      "Superior 800x800 Vitrified Floor Tiles (GVT Tiles)",
      "Granite flooring for common areas and staircase",
      "External painting with weather coat paints and waterproof coating"
    ]
  },
  interiors: {
    title: "Interior Finishes",
    icon: Palette,
    items: [
      "Designed Glazed Tiles for Toilets and Kitchen (24\" Above Platform)",
      "Granite Platform with Bull Nosing and Granite/SS Sink for Kitchen",
      "Putty Finished Emulsion Painting for Ceiling and Walls",
      "Anti Skid ceramic tiles for bathroom floors",
      "Ceramic glazed tiles dado up to 7ft height in bathrooms"
    ]
  },
  electrical: {
    title: "Electrical & Technology",
    icon: Zap,
    items: [
      "Above 3KW power provided for each apartment with single phase meter",
      "Modular Electrical Switches (Anchor/Roma/Legrand)",
      "Electrical Wiring of Reputed Brand",
      "TV Point and Telephone/Intercom Connection",
      "AC Point Provision in all Bedrooms",
      "Power Failure Sensing Siren"
    ]
  },
  plumbing: {
    title: "Plumbing & Sanitary",
    icon: Droplets,
    items: [
      "Jaguar Fittings for Toilets and Kitchen/Equivalent",
      "Branded Sanitary Ware (Hindware/Parryware) in all Toilets",
      "Hot and cold mixer unit for all bathrooms",
      "Overhead water tank and underground sump tank with pumps",
      "Automatic water level controller for overhead tank",
      "Pressure checked plumbing and drainage lines"
    ]
  },
  doors: {
    title: "Doors & Windows",
    icon: DoorOpen,
    items: [
      "Attractive melamine/PU coated decorative main entrance door",
      "Hardwood door frames with superior Teakwood door shutters",
      "Granite frame with fibrotech shutter doors for Toilets",
      "Colour Coated UPVC window frames and steel grills",
      "Superior Designer Locks for all Inside Doors",
      "Brass Hardware for main door & steel tubular locks"
    ]
  },
  safety: {
    title: "Safety & Security",
    icon: Shield,
    items: [
      "Adequate Fire Fighting Systems",
      "CCTV in visitors lounge",
      "2 automatic elevators of reputed brand",
      "Emergency lighting systems",
      "Security provisions in common areas"
    ]
  }
};

const brandsList = ["Jaguar", "Hindware", "Parryware", "Anchor", "Roma", "Legrand"];

export default function SpecificationsSection() {
  const [activeTab, setActiveTab] = useState("structure");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter logic
  const filteredSpecifications = useMemo(() => {
    const filtered = {};
    
    Object.entries(specifications).forEach(([key, spec]) => {
      const filteredItems = spec.items.filter(item => {
        // Search term filter
        const matchesSearch = searchTerm === "" || 
          item.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Brand filter
        const matchesBrand = selectedBrands.length === 0 || 
          selectedBrands.some(brand => 
            item.toLowerCase().includes(brand.toLowerCase())
          );
        
        return matchesSearch && matchesBrand;
      });
      
      if (filteredItems.length > 0) {
        filtered[key] = {
          ...spec,
          items: filteredItems
        };
      }
    });
    
    return filtered;
  }, [searchTerm, selectedBrands]);

  const toggleBrandFilter = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedBrands([]);
  };

  const hasActiveFilters = searchTerm !== "" || selectedBrands.length > 0;
  const filteredTabsCount = Object.keys(filteredSpecifications).length;

  return (
    <section id="specifications" className="specifications-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Premium <span className="highlight-text">Specifications</span>
          </h2>
          <p className="section-description">
            Every detail crafted with precision using the finest materials and 
            latest technology to ensure quality and durability.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-section">
          {/* <div className="search-container">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="clear-search-btn"
                >
                  <X className="clear-icon" />
                </button>
              )}
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="filter-toggle-btn"
            >
              <Filter className="filter-icon" />
              <span className="filter-text">Filters</span>
              {selectedBrands.length > 0 && (
                <span className="filter-count">{selectedBrands.length}</span>
              )}
            </button>
          </div> */}

          {/* Brand Filters */}
          {showFilters && (
            <div className="filter-panel">
              <div className="filter-header">
                <h3 className="filter-title">Filter by Brands</h3>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="clear-filters-btn">
                    Clear All
                  </button>
                )}
              </div>
              
              <div className="brand-filters">
                {brandsList.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => toggleBrandFilter(brand)}
                    className={`brand-filter-btn ${
                      selectedBrands.includes(brand) ? 'active' : ''
                    }`}
                  >
                    {brand}
                    {selectedBrands.includes(brand) && (
                      <CheckCircle className="brand-check-icon" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Filter Results Info */}
          {hasActiveFilters && (
            <div className="filter-results-info">
              <span className="results-text">
                Showing results in {filteredTabsCount} of {Object.keys(specifications).length} categories
              </span>
              {filteredTabsCount === 0 && (
                <span className="no-results-text">No specifications match your filters</span>
              )}
            </div>
          )}
        </div>

        <div className="tabs-container">
          <div className="tabs-wrapper">
            <div className="tabs-list">
              {Object.entries(filteredSpecifications).map(([key, spec]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`tab-trigger ${activeTab === key ? 'active' : ''}`}
                >
                  <spec.icon className="tab-icon" />
                  <span className="tab-text">
                    {spec.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {Object.entries(filteredSpecifications).map(([key, spec]) => (
              <div 
                key={key} 
                className={`tab-content ${activeTab === key ? 'active' : ''}`}
              >
                <div className="spec-card">
                  <div className="card-header">
                    <div className="card-title">
                      <spec.icon className="title-icon" />
                      {spec.title}
                      <span className="items-count">({spec.items.length} items)</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="items-grid">
                      {spec.items.map((item, index) => (
                        <div
                          key={index}
                          className="item-card"
                        >
                          <CheckCircle className="check-icon" />
                          <span className="item-text">
                            {searchTerm ? (
                              <span dangerouslySetInnerHTML={{
                                __html: item.replace(
                                  new RegExp(`(${searchTerm})`, 'gi'),
                                  '<mark class="highlight-match">$1</mark>'
                                )
                              }} />
                            ) : (
                              item
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Banner */}
        <div className="quality-banner-container">
          <div className="quality-banner">
            <div className="badge-container">
              <div className="quality-badge">
                Quality Assured
              </div>
            </div>
            <h3 className="banner-title">
              Branded Materials & Trusted Partners
            </h3>
            <p className="banner-description">
              We work exclusively with renowned brands like Jaguar, Hindware, Parryware, 
              Anchor, Roma, and Legrand to ensure the highest quality in every aspect of construction.
            </p>
            <div className="brands-container">
              {brandsList.map((brand, index) => (
                <span
                  key={index}
                  className={`brand-tag ${selectedBrands.includes(brand) ? 'highlighted' : ''}`}
                  // onClick={() => toggleBrandFilter(brand)}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .specifications-section {
          padding: 5rem 0;
          background-color: #111827;
        }

        .section-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 640px) {
          .section-container {
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .section-container {
            padding: 0 2rem;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .highlight-text {
          color: #fbbf24;
        }

        .section-description {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Filter Section */
        .filter-section {
          margin-bottom: 3rem;
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
        }

        .search-container {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .search-input-wrapper {
          flex: 1;
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.2rem;
          color: white;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: #fbbf24;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
        }

        .search-input::placeholder {
          color: #9ca3af;
        }

        .clear-search-btn {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.2rem;
          transition: color 0.3s;
        }

        .clear-search-btn:hover {
          color: #fbbf24;
        }

        .clear-icon {
          width: 1rem;
          height: 1rem;
        }

        .filter-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.2rem;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s, border-color 0.3s;
          position: relative;
        }

        .filter-toggle-btn:hover {
          background-color: #374151;
          border-color: #fbbf24;
        }

        .filter-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .filter-text {
          font-weight: 500;
        }

        .filter-count {
          background-color: #fbbf24;
          color: black;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          min-width: 1.25rem;
          text-align: center;
        }

        .filter-panel {
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.2rem;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .filter-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
        }

        .clear-filters-btn {
          background: none;
          border: none;
          color: #fbbf24;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.25rem 0.5rem;
          border-radius: 0.2rem;
          transition: background-color 0.3s;
        }

        .clear-filters-btn:hover {
          background-color: rgba(251, 191, 36, 0.1);
        }

        .brand-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .brand-filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #374151;
          border: 1px solid #4b5563;
          border-radius: 9999px;
          color: #e5e7eb;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
        }

        .brand-filter-btn:hover {
          background-color: #4b5563;
          border-color: #fbbf24;
        }

        .brand-filter-btn.active {
          background-color: rgba(251, 191, 36, 0.2);
          border-color: #fbbf24;
          color: #fbbf24;
        }

        .brand-check-icon {
          width: 1rem;
          height: 1rem;
        }

        .filter-results-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background-color: rgba(55, 65, 81, 0.5);
          border-radius: 0.2rem;
          margin-bottom: 1rem;
        }

        .results-text {
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .no-results-text {
          color: #f87171;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tabs-container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .tabs-wrapper {
          width: 100%;
        }

        .tabs-list {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          margin-bottom: 2rem;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .tabs-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .tabs-list {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        .tab-trigger {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.75rem;
          gap: 0.5rem;
          color: #d1d5db;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          border-right: 1px solid #374151;
          border-bottom: 1px solid #374151;
        }

        .tab-trigger:hover {
          background-color: rgba(251, 191, 36, 0.1);
          color: #fbbf24;
        }

        .tab-trigger.active {
          background-color: rgba(251, 191, 36, 0.2);
          color: #fbbf24;
        }

        .tab-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .tab-text {
          font-size: 0.75rem;
          font-weight: 500;
          display: none;
        }

        @media (min-width: 640px) {
          .tab-text {
            display: inline;
          }
        }

        .tab-content {
          display: none;
        }

        .tab-content.active {
          display: block;
        }

        .spec-card {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.2rem;
          overflow: hidden;
        }

        .card-header {
          background: linear-gradient(to right, #fbbf24, #f59e0b);
          color: black;
          padding: 1.5rem;
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .title-icon {
          width: 2rem;
          height: 2rem;
        }

        .items-count {
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.8;
        }

        .card-content {
          padding: 2rem;
          background-color: #1f2937;
        }

        .items-grid {
          display: grid;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .items-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .item-card {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background-color: rgba(55, 65, 81, 0.5);
          border: 1px solid #4b5563;
          border-radius: 0.2rem;
          transition: background-color 0.3s;
        }

        .item-card:hover {
          background-color: #374151;
        }

        .check-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #fbbf24;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .item-text {
          color: #e5e7eb;
          font-weight: 500;
        }

        :global(.highlight-match) {
          background-color: rgba(251, 191, 36, 0.3);
          color: #fbbf24;
          padding: 0.125rem;
          border-radius: 0.125rem;
          font-weight: 600;
        }

        .quality-banner-container {
          margin-top: 4rem;
        }

        .quality-banner {
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.21rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          padding: 2rem;
          text-align: center;
        }

        .badge-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .quality-badge {
          background-color: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.3);
          color: #fbbf24;
          font-size: 1.125rem;
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          border-radius: 9999px;
        }

        .banner-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .banner-description {
          color: #d1d5db;
          max-width: 42rem;
          margin: 0 auto 1.5rem;
        }

        .brands-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .brand-tag {
          background-color: #374151;
          color: #e5e7eb;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 500;
          border: 1px solid #4b5563;
          cursor: pointer;
          transition: all 0.3s;
        }

        .brand-tag:hover {
          background-color: #4b5563;
          border-color: #fbbf24;
        }

        .brand-tag.highlighted {
          background-color: rgba(251, 191, 36, 0.2);
          border-color: #fbbf24;
          color: #fbbf24;
        }
      `}</style>
    </section>
  );
}