# Project 3: Implement Client Script & UI Policy (Incident)

> **Technology Track:** ServiceNow Administrator  
> **Platform:** ServiceNow  
> **Application/Table:** Incident (`incident`)  
> **Project Type:** ServiceNow Administration / Configuration Project

## 📌 Project Overview

This project demonstrates how to configure the **Incident** table in ServiceNow using **Client Scripts** and **UI Policies**.

The objective is to improve the Incident form experience by dynamically controlling form fields, validating user input, and making selected fields mandatory, visible, or read-only based on business conditions.

The project follows a complete project lifecycle:

1. Brainstorming & Ideation
2. Requirement Analysis
3. Project Design Phase
4. Project Planning Phase
5. Project Development Phase
6. Project Testing
7. Project Documentation
8. Project Demonstration

## 🎯 Objectives

- Understand Client Scripts and UI Policies in ServiceNow.
- Configure dynamic behavior on the Incident form.
- Make fields mandatory/read-only/visible based on conditions.
- Use `g_form` APIs for client-side form manipulation.
- Validate Incident form behavior using structured test cases.
- Document the complete implementation for GitHub/project submission.
- Demonstrate the working configuration in a ServiceNow instance.

## 💡 Problem Statement

Incident records often contain fields whose behavior depends on the selected Incident information. If users are allowed to enter incomplete or inappropriate information, data quality can decrease.

This project addresses the problem by configuring:

- **UI Policies** for declarative field behavior.
- **Client Scripts** for client-side validation and dynamic form logic.
- Appropriate conditions on the Incident form.
- Test cases to verify expected behavior.

### Sample Business Scenario

When an Incident is being handled:

- If **Priority is high**, the form should require additional information.
- If a selected field requires explanation, the corresponding field should become mandatory.
- Certain fields may become read-only or visible depending on the Incident state/priority.
- Client-side validation should prevent invalid input before submission.

> Adjust the exact fields and conditions to match your instructor's assignment requirements and your ServiceNow instance.

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| ServiceNow | ITSM platform and development environment |
| Incident Table | Target table for configuration |
| Client Script | Client-side form logic and validation |
| UI Policy | Declarative form behavior |
| `g_form` API | Form field manipulation |
| JavaScript | Client Script programming |
| GitHub | Version control and project documentation |
| Markdown | Project documentation |

## 🏗️ Repository Structure

```text
Project-3-Client-Script-UI-Policy-Incident/
│
├── 1. Brainstorming & Ideation/
│   ├── README.md
│   ├── Problem-Statement.md
│   └── Ideas-and-Use-Cases.md
│
├── 2. Requirement Analysis/
│   ├── README.md
│   ├── Functional-Requirements.md
│   ├── Non-Functional-Requirements.md
│   └── Acceptance-Criteria.md
│
├── 3. Project Design Phase/
│   ├── README.md
│   ├── Form-Design.md
│   ├── UI-Policy-Design.md
│   ├── Client-Script-Design.md
│   └── Process-Flow.md
│
├── 4. Project Planning Phase/
│   ├── README.md
│   ├── Project-Plan.md
│   ├── Task-Tracker.md
│   └── Risk-Management.md
│
├── 5. Project Development Phase/
│   ├── README.md
│   ├── Implementation-Steps.md
│   ├── UI-Policies.md
│   ├── Client-Scripts.md
│   └── Sample-g_form-Scripts.js
│
├── 6. Project Testing/
│   ├── README.md
│   ├── Test-Plan.md
│   ├── UI-Policy-Test-Cases.md
│   ├── Client-Script-Test-Cases.md
│   └── Test-Results.md
│
├── 7. Project Documentation/
│   ├── README.md
│   ├── Configuration-Guide.md
│   ├── Screenshots.md
│   └── User-Guide.md
│
├── 8. Project Demonstration/
│   ├── README.md
│   ├── Video-Script.md
│   ├── Demo-Flow.md
│   └── Demo-Checklist.md
│
└── README.md
```

## 👥 Team Details

| Role | Name | Responsibility |
|---|---|---|
| Team Lead | `[Your Name]` | Project coordination and ServiceNow configuration |
| Member 1 | `[Name]` | Requirement analysis and documentation |
| Member 2 | `[Name]` | Client Script and UI Policy implementation |
| Member 3 | `[Name]` | Testing and demonstration |

> Replace the placeholders with your actual team details.

## 📋 Project Deliverables

- Problem statement
- Functional and non-functional requirements
- UI/form design
- UI Policy conditions
- Client Script logic
- ServiceNow implementation steps
- `g_form` examples
- Test cases and results
- Screenshot documentation
- User guide
- Video demonstration script

## 🚀 How to Use This Repository

1. Create or open a ServiceNow Personal Developer Instance.
2. Open the **Incident** table.
3. Follow the design and implementation documents in order.
4. Create the required UI Policies.
5. Create the required Client Scripts.
6. Test the behavior using the provided test cases.
7. Replace screenshot placeholders with your actual screenshots.
8. Record the demonstration using the provided video script.
9. Update team details and final test results.
10. Push the completed repository to GitHub.

## 🔐 Important Note

This repository contains configuration examples and documentation. Do not commit passwords, API keys, instance credentials, personal access tokens, or other confidential ServiceNow information.

## 📈 Future Enhancements

- Add Data Policies for server-side data enforcement.
- Add Business Rules where server-side validation is required.
- Add Client Script validation for additional Incident fields.
- Add automated testing with ServiceNow ATF.
- Add role-based behavior for different support teams.
- Add dashboards and reporting for Incident quality.

## 📚 Resources

- ServiceNow documentation: https://www.servicenow.com/docs/
- ServiceNow Developer portal: https://developer.servicenow.com/
- GitHub documentation: https://docs.github.com/

---

**Project Title:** Project 3: Implement Client Script & UI Policy (Incident)  
**Technology Track:** ServiceNow Administrator  
**Status:** `In Progress`  
**Version:** `1.0`
