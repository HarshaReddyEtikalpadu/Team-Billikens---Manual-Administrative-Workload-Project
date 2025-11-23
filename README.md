# Administrative Workload Analytics Dashboard
## Silverleaf University - Team 16 Master's Research Project

[![Live Demo](https://img.shields.io/badge/Live-Dashboard-blue?style=for-the-badge)](https://university-admin-workload-analytics.vercel.app/login)
[![GitHub Pages](https://img.shields.io/badge/Portfolio-Website-green?style=for-the-badge)](https://harshareddyetikalpadu.github.io/Team-Billikens---Manual-Administrative-Workload-Project/)

---

## 🎯 Project Overview

A comprehensive web-based analytics platform designed to transform administrative operations at Silverleaf University by providing real-time insights into workload distribution, processing efficiency, and resource optimization opportunities.

### Problem Statement
Silverleaf University processed over 2,600 administrative requests across seven departments (January 2024 - December 2025) without centralized visibility into:
- Processing time bottlenecks
- Peak workload periods
- Resource allocation efficiency
- Error patterns and rework rates

### Our Solution
An interactive analytics dashboard that provides:
- **Real-time KPI tracking** across 8 key metrics
- **AI-driven recommendations** for process optimization
- **Peak-hour heatmaps** for staffing decisions
- **Department comparisons** for resource allocation
- **Team performance analytics** for workload balancing

---

## 📊 Key Statistics

| Metric | Value | Target | Impact |
|--------|-------|--------|--------|
| **Total Requests** | 2,600+ | - | Processed over 2 years |
| **Avg Processing Time** | 76 min | 45 min | 69% over target |
| **Error Rate** | ~50% | <15% | Needs 70% reduction |
| **Peak Hours** | 9-11 AM | - | 40-50 requests/hour |
| **Automation Savings** | $74,400 | - | Annual potential |

---

## 👥 Team Members

### Team 16 - Five Graduate Students Collaborating for Excellence

| Name | Role | Responsibilities |
|------|------|------------------|
| **Naveen Ettabouina** | Project Manager | Sprint coordination, scrum facilitation, Trello management, deadline tracking, stakeholder communication |
| **Harsha Vardhan Reddy Etikalapadu** | Team Lead & Full Stack Developer | Technical architecture, development decisions, data analysis, coding standards, system design |
| **Ramesh Alakunta** | Data Analyst & Developer | Data visualization design, dashboard components, bug fixes, PR management, synthetic data generation |
| **Karthik** | Data Analyst & Frontend Developer | Analytics features, UI/UX design, code reviews, dashboard functionality, testing support |
| **Srikar Reddy** | QA Lead & Data Analyst | Comprehensive manual testing, bug identification, data validation, quality assurance, accuracy verification |

---

## 🚀 Live Demo

### Access the Dashboard
**🔗 Live Dashboard:** [https://university-admin-workload-analytics.vercel.app/login](https://university-admin-workload-analytics.vercel.app/login)

**📋 Demo Credentials:**
```
Email: hwright@example.org
Password: Silverleaf@123
```

### Portfolio Website
**🌐 Project Documentation:** [https://harshareddyetikalpadu.github.io/Team-Billikens---Manual-Administrative-Workload-Project/](https://harshareddyetikalpadu.github.io/Team-Billikens---Manual-Administrative-Workload-Project/)

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - Component-based UI framework
- **Tailwind CSS** - Utility-first styling
- **Recharts** - Interactive data visualization
- **Vite** - Fast build tool and dev server

### Data Engineering
- **Python** - Synthetic data generation
- **Pandas** - Data manipulation and analysis
- **Faker** - Realistic mock data generation
- **NumPy** - Statistical modeling

### Deployment & DevOps
- **Vercel** - Dashboard hosting (CI/CD)
- **GitHub Pages** - Portfolio website hosting
- **GitHub** - Version control and collaboration

---

## 📁 Project Structure
```
Team-Billikens---Manual-Administrative-Workload-Project/
│
├── index.html              # Home page with team & executive summary
├── problem.html            # Problem context & stakeholders
├── research.html           # Research insights & literature review
├── solution.html           # Proposed solution & architecture
├── charter.html            # Project charter & objectives
├── architecture.html       # System architecture & data design
├── dashboard.html          # Dashboard features & screenshots
├── ethics.html             # Ethical considerations
├── lessons.html            # Lessons learned & team reflection
│
├── css/
│   └── style.css          # Complete styling for all pages
│
├── js/
│   └── main.js            # Navigation and interactions
│
├── images/                 # Architecture diagrams, screenshots, logos
│   └── .gitkeep
│
└── README.md              # This file
```

---

## 🎨 Dashboard Features

### 1. **KPI Dashboard** (8 Real-time Metrics)
- Total Requests Processed
- Average Processing Time
- Total Hours Spent
- Estimated Cost
- Approval Rate
- Rejection Rate
- Pending Requests
- Error/Rework Rate

### 2. **Interactive Visualizations**
- **Pie Chart:** Request distribution by type
- **Bar Chart:** Processing time comparison by task
- **Line Graph:** Workload trends over time
- **Heatmap:** Peak demand by day and hour

### 3. **Team Performance Analytics**
- Individual administrator metrics
- Efficiency scoring
- Task completion rates
- Error tracking

### 4. **AI-Driven Recommendations**
- Process automation opportunities
- Staffing optimization suggestions
- Workload redistribution alerts
- Training needs identification

---

## 📊 Data Architecture

### Entity Relationship Model
**6 Core Entities:**
1. **Departments** (1:M with Admins, Requests)
2. **Admins** (M:1 with Departments, 1:M with Requests)
3. **Requests** (M:1 with Departments, Admins, RequestTypes)
4. **RequestTypes** (1:M with Requests)
5. **WorkloadLog** (M:1 with Admins, Requests)
6. **DailySummary** (Aggregated analytics)

### Data Generation
- **2,600+ synthetic records** (Jan 2024 - Dec 2025)
- **Realistic distributions** based on university operations
- **Statistical modeling** (normal, Poisson distributions)
- **Third Normal Form (3NF)** database design

---

## 🎯 Key Insights & Recommendations

### Insight 1: Peak Hour Congestion
**Finding:** 9-11 AM Monday-Thursday shows 40-50 active requests/hour (95%+ occupancy)

**Recommendation:** Implement reservation system during peak hours → **60% reduction in search time**

### Insight 2: Document Verification Bottleneck
**Finding:** Average 76 minutes vs. target 48 minutes (58% over)

**Recommendation:** Automate verification workflow → **$74,400 annual savings**

### Insight 3: International Office Backlog
**Finding:** Consistent 40-50 pending requests

**Recommendation:** Increase staffing + streamline processes → **50% backlog reduction**

### Insight 4: High Error Rate
**Finding:** ~50% of requests have errors/rework (target: <15%)

**Recommendation:** Implement quality checks + targeted training → **70% error reduction**

---

## 🔒 Ethical Considerations

### Data Privacy & Security
- Role-based access control (Admin, Manager, Analyst views)
- Anonymized student data (non-identifiable IDs)
- Aggregated metrics for privacy protection
- Secure authentication and authorization

### Bias Mitigation
- Complexity-adjusted performance scoring
- Normalized departmental workload comparisons
- 90-day onboarding exclusion for new admins
- Distinction between individual vs. systemic errors

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Mobile-responsive design

---

## 📈 Expected Outcomes

### Operational Efficiency
###
- ✅ 15% reduction in average processing time (6 months)
- ✅ 25% decrease in error/rework rates
- ✅ 90%+ SLA compliance
- ✅ <50 pending requests at month-end

### Financial Impact
- 💰 $74,400 annual savings from automation
- 💰 Reduced overtime costs through better forecasting
- 💰 Optimized staffing ROI

### Decision Quality
- 📊 Data-driven resource allocation
- 📊 Evidence-based staffing decisions
- 📊 Targeted training investments
- 📊 80%+ stakeholder satisfaction

---

## 🚀 How to Run Locally

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- No server required (static HTML/CSS/JS)

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/harshareddyetikalpadu/Team-Billikens---Manual-Administrative-Workload-Project.git
```

2. **Navigate to project directory**
```bash
cd Team-Billikens---Manual-Administrative-Workload-Project
```

3. **Open in browser**
```bash
# Option 1: Direct file open
open index.html

# Option 2: Local server (Python)
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Local server (Node.js)
npx serve
```

---

## 📝 Presentation Notes

### 5-Minute Live Presentation Structure

**Total Time:** 5 minutes | **Team:** 5 members (~1 min each)

1. **Problem Overview** (30 sec - Naveen)
	- 2,600 requests, no visibility
	- 76 min avg vs. 48 min target
	- ~50% error rate

2. **Proposed Solution** (1 min - Harsha)
	- Web-based analytics dashboard
	- React + Tailwind + Recharts
	- Show architecture diagram briefly

3. **Data Design** (1 min - Ramesh)
	- 6-entity ERD
	- Synthetic data generation (Python/Faker)
	- 2,600 records, realistic distributions

4. **Dashboard Insights** (2 min - Karthik & Srikar)
	- Walk through live dashboard
	- Peak hour heatmap (9-11 AM)
	- Document verification bottleneck
	- AI recommendations

5. **Conclusion** (30 sec - All)
	- $74K savings potential
	- Lessons learned
	- Next steps: pilot in Registrar/Finance

---

## 📚 References

1. NACUBO (2023). *Higher Education Operating Expenditures Report*
2. Deloitte (2022). *Workforce Analytics in Higher Education*
3. EDUCAUSE (2023). *Administrative Efficiency through Analytics*
4. McKinsey (2023). *Digital Automation in Public Sector*
5. Anderson & Gagliardi (2022). *Workload Transparency in Universities*

**Full reference list:** See `lessons.html` on portfolio website

---

## 🎓 Academic Context

**Course:** Master's Research Project
**Institution:** Silverleaf University (Case Study)
**Semester:** Fall 2025
**Team:** Team 16 - "Team Billikens"

---

## 📞 Contact & Links

- **Portfolio Website:** [GitHub Pages Site](https://harshareddyetikalpadu.github.io/Team-Billikens---Manual-Administrative-Workload-Project/)
- **Live Dashboard:** [Vercel Deployment](https://university-admin-workload-analytics.vercel.app/login)
- **GitHub Repository:** [Source Code](https://github.com/harshareddyetikalpadu/Team-Billikens---Manual-Administrative-Workload-Project)

---

## 📄 License

This project is an academic research project created for educational purposes.

---

## 🙏 Acknowledgments

- **Professor:** [Your Professor's Name] - Guidance and feedback
- **Classmates:** Peer reviews and usability testing
- **Silverleaf University:** Case study context and problem domain

---

**Built with ❤️ by Team 16 | © 2025 Silverleaf University**

