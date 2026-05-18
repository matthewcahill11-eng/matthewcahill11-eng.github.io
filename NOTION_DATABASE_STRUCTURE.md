# Notion Database Structure for Portfolio Projects

## Database Properties (columns)

Create a Notion database with these properties:

### Required Fields

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| **Title** | Title | Project name | "ML-Accelerated Aeroelastic Modelling" |
| **Slug** | Text | URL-friendly identifier | "wind-turbine-aeroelastic" |
| **Short Description** | Text | Brief summary for card (150-200 words) | "Literature review and research study proposal..." |
| **Context** | Text | Degree/institution/date | "MEng, University of Galway" |
| **Tags** | Multi-select | Technology/topic tags | CFD, FEM, Machine Learning, Research |
| **Has PDF** | Checkbox | Whether there's a PDF artifact | ☑ |
| **Status** | Select | Ready to publish? | Published / Draft / Need PDF |

### Optional Fields (for projects with PDFs)

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| **PDF Filename** | Text | Name for the PDF file | "wind-turbine-literature-review.pdf" |
| **Preview Pages** | Text | Comma-separated page numbers | "2, 8, 11, 12, 14, 16, 21" |
| **Card Preview Pages** | Text | Pages for main portfolio card | "2, 8, 12, 14" |
| **Recognition** | Text | Awards/grades/adoptions | "Graded 98% — highest in cohort..." |

### External Link (for non-PDF projects)

| Property Name | Type | Description | Example |
|---------------|------|-------------|---------|
| **External Link** | URL | Link to live project/demo | "https://example.com" |

## Page Content Structure

Inside each Notion page, use this structure:

### Header Section
```
# [Project Title]

**Context**: MEng Mechanical Engineering, University of Galway — graded 98%

**Summary**: One-sentence overview of what this project is and why it matters.
```

### Content Sections (H2 headings)

Use consistent H2 headings for main sections:

```markdown
## How I approached [the problem/field]
[Methodology, process, thinking]

## Scope of the [work/review/project]
- Bullet point 1
- Bullet point 2
- Bullet point 3

## Key findings / The gap / Results
[Main discoveries or contributions]

## Proposed solution / Implementation
[What you built or proposed]
```

## Example Database Rows

### Example 1: Research Paper with PDF
- **Title**: ML-Accelerated Aeroelastic Modelling of Onshore Wind Turbines
- **Slug**: wind-turbine-aeroelastic
- **Short Description**: Literature review and research study proposal identifying machine learning as the unexploited lever for breaking computational cost barriers...
- **Context**: MEng, University of Galway
- **Tags**: CFD, FEM, Machine Learning, Aeroelastics, Research
- **Has PDF**: ☑
- **PDF Filename**: wind-turbine-literature-review.pdf
- **Preview Pages**: 2, 8, 11, 12, 14, 16, 21
- **Card Preview Pages**: 2, 8, 12, 14
- **Recognition**: Graded 98% — highest in cohort...
- **Status**: Published

### Example 2: Software Project (no PDF)
- **Title**: Real-Time Robotics Simulation Platform
- **Slug**: robotics-sim-platform
- **Short Description**: Built a ROS2-based simulation environment for testing autonomous navigation algorithms...
- **Context**: Personal Project, 2024
- **Tags**: ROS2, Python, Gazebo, Computer Vision
- **Has PDF**: ☐
- **External Link**: https://github.com/username/project
- **Status**: Published

## Export Instructions

When ready to export:

1. **Select database view** with all projects you want to publish
2. Click `⋯` menu → **Export**
3. Choose format:
   - **Markdown & CSV** (recommended) - I can parse both
   - OR **HTML** - Also works
4. **Include content**: Make sure "Include content" is checked
5. **Include subpages**: If you have nested content, check this
6. Download the .zip file
7. Share it with me (upload or provide link)

## What I'll Generate

From your export, I'll automatically create:

- ✅ Project cards on the main portfolio page
- ✅ Individual project detail pages (`/app/projects/[slug]/page.tsx`)
- ✅ PDF preview carousels (for projects with PDFs)
- ✅ Proper routing and navigation
- ✅ Consistent styling matching your current design

## Tips for Best Results

1. **Use consistent H2 headings** across projects for similar sections
2. **Keep short descriptions to 150-200 words** - they appear on cards
3. **Be specific with tags** - use the same tag names across projects for consistency
4. **Choose preview pages** that showcase key visuals/diagrams
5. **Fill in recognition** only when there's something notable to highlight

## Notes

- You can always add more projects later - just export again
- Draft projects won't be generated (Status ≠ Published)
- External links and PDF projects will render differently
- I'll preserve your Notion formatting (bold, italic, lists, links)

---

Once you've built your database and exported it, just upload the .zip file and I'll:
1. Parse all the project data
2. Generate all the cards and pages
3. Set up routing
4. Create any needed preview images from PDFs
