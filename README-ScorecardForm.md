# ScorecardForm Component

A production-ready multi-step form section for the **Employee Benefits & Tax Savings "Qualifier" Assessment** - a high-value lead magnet.

## Features

✅ **Multi-Step Form**: 3 horizontal slides with 5 questions each (15 total questions)
✅ **Side Scrolling**: Framer Motion-powered slide transitions
✅ **Form Validation**: React Hook Form + Zod schema validation
✅ **Auto-save**: Debounced localStorage persistence
✅ **Responsive Design**: Mobile-first Tailwind CSS
✅ **Accessibility**: ARIA labels, keyboard navigation, screen reader support
✅ **Professional UI**: Clean enterprise aesthetic with gradient accents

## Tech Stack

- **React** + **Tailwind CSS** + **Framer Motion**
- **React Hook Form** for form management
- **Zod** for schema validation
- **localStorage** for data persistence

## Installation

1. Install required dependencies:
```bash
npm install react-hook-form @hookform/resolvers zod framer-motion
```

2. Import and use the component:
```jsx
import ScorecardForm from './src/ScorecardForm';

function App() {
  return (
    <div>
      <ScorecardForm />
    </div>
  );
}
```

## Component Structure

```
src/
├── ScorecardForm.jsx          # Main component
├── steps/
│   ├── Step1Goals.jsx        # Questions 1-5: Business Goals & Structure
│   ├── Step2Snapshot.jsx     # Questions 6-10: Business Snapshot & Benefits
│   └── Step3Report.jsx       # Questions 11-15: Contact & Custom Report
├── components/
│   ├── Progress.jsx          # Step indicators & progress bar
│   └── NavButtons.jsx        # Back/Next/Submit buttons
├── hooks/
│   └── useScorecardStore.js  # localStorage persistence
├── schema.js                 # Zod validation schemas
└── animations.js             # Framer Motion variants
```

## Form Questions

### Slide 1: Business Goals & Structure
1. **Business Priority**: Multiple choice (attracting talent, reducing costs, etc.)
2. **Turnover Concern**: 1-5 scale rating
3. **Motivation**: Multiple choice (cost, employee requests, etc.)
4. **Employee Count**: Number input (1-10,000)
5. **Business Structure**: Multiple choice (S-Corp, LLC, etc.)

### Slide 2: Business Snapshot & Benefits
6. **Health Plan**: Yes/No radio
7. **Health Plan Challenges**: Conditional multiple choice (if Yes to Q6)
8. **Payroll Processing**: Multiple choice (ADP, QuickBooks, etc.)
9. **Supplemental Benefits**: Checkboxes (max 3 selections)
10. **Average Salary**: Multiple choice ranges

### Slide 3: Contact & Custom Report
11. **Decision Timeline**: Multiple choice (ASAP, 3 months, etc.)
12. **Company Name**: Text input (required)
13. **Full Name**: Text input (required)
14. **Work Email**: Email input with validation (required)
15. **Phone Number**: Tel input with international support (required)

## Validation Rules

- All fields required unless conditional (Q7)
- Email validation (RFC compliant)
- Phone validation (E.164 format, international support)
- Employee count: 1-10,000 integers
- Supplemental benefits: 1-3 selections max
- Conditional validation for health plan challenges

## User Experience Features

- **Progressive Disclosure**: Next button disabled until current step is valid
- **Auto-focus**: Next button focused after step completion
- **Keyboard Navigation**: Arrow keys, Enter key support
- **Touch Support**: Swipe gestures on mobile
- **Progress Tracking**: Visual step indicators with progress bar
- **Data Persistence**: Auto-save every 500ms, restore on page reload

## Accessibility Features

- Semantic HTML with proper ARIA labels
- Logical tab order and keyboard navigation
- Screen reader friendly step names
- High contrast design with visible focus states
- Error messages with `aria-live="polite"`

## Styling

- **Colors**: Indigo → Teal gradient for primary elements
- **Typography**: Large, readable text with comfortable spacing
- **Layout**: Card-based design with rounded corners and subtle shadows
- **Responsive**: Grid reflows gracefully on all screen sizes
- **Focus States**: Clear focus rings and hover effects

## Data Submission

- **Endpoint**: `POST /api/scorecard`
- **Payload**: Form data + UTM parameters
- **Success**: Redirects to `/assessment/thank-you`
- **Error Handling**: Graceful fallback with user feedback

## Customization

### Colors
Update the gradient classes in components:
```css
bg-gradient-to-r from-indigo-600 to-teal-600
```

### Validation Messages
Modify error messages in `schema.js`:
```javascript
required_error: 'Custom error message'
```

### Form Fields
Add/remove questions by updating the step components and schema files.

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Mobile browsers with touch support
- Progressive enhancement for older browsers

## Performance

- Debounced auto-save (500ms delay)
- Lazy loading of form steps
- Optimized re-renders with React.memo
- Efficient state management with custom hooks

## Testing

The component includes `data-qa` attributes for testing:
- `data-qa="step-1|2|3"` on each step container
- `data-qa="btn-next"` on next button
- `data-qa="btn-back"` on back button
- `data-qa="btn-submit"` on submit button

## License

This component is built for production use and follows React best practices.
