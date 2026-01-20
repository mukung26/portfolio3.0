
export const downloadCV = async () => {
  // Accessing global jsPDF from the CDN script in index.html
  // The library often registers itself under window.jspdf.jsPDF
  const jspdfModule = (window as any).jspdf;
  
  if (!jspdfModule || !jspdfModule.jsPDF) {
    console.error("jsPDF library not fully loaded from CDN");
    alert("The PDF generator is still loading. Please wait 3 seconds and try again.");
    return;
  }

  const { jsPDF } = jspdfModule;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - (margin * 2);
  let y = margin;

  const checkPage = (needed: number) => {
    if (y + needed > 280) {
      doc.addPage();
      y = margin;
    }
  };

  // --- Header ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(37, 99, 235); // Blue-600
  doc.text('JERWIN CRUSPERO', margin, y);
  y += 10;

  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105); // Slate-600
  doc.setFont('helvetica', 'normal');
  doc.text('Accounts Payable Specialist | Automation Expert', margin, y);
  y += 6;
  
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139); // Slate-500
  doc.text('Davao City, Philippines  |  +63 991 474 0695', margin, y);
  y += 5;
  doc.text('Email: jcruspero3263@gmail.com', margin, y);
  y += 5;
  doc.setTextColor(37, 99, 235);
  doc.text('LinkedIn: linkedin.com/in/jerwin-cruspero-4a4228273/', margin, y);
  y += 10;

  // Horizontal Line
  doc.setDrawColor(226, 232, 240); 
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  const addSectionTitle = (title: string) => {
    checkPage(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(37, 99, 235);
    doc.text(title.toUpperCase(), margin, y);
    y += 7;
    doc.setTextColor(30, 41, 59); 
  };

  // --- Professional Summary ---
  addSectionTitle('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const summary = "Highly skilled Professional with a background in Customer Service and a focus on automation. Expert in leveraging Google Apps Script, Node.js, and Excel to streamline financial workflows and reporting. Proven track record in improving data accuracy and operational efficiency. Seeking to apply technical aptitude and foundational accounting knowledge to an Accounts Payable role.";
  const summaryLines = doc.splitTextToSize(summary, maxWidth);
  doc.text(summaryLines, margin, y);
  y += (summaryLines.length * 5) + 8;

  // --- Core Competencies ---
  addSectionTitle('Core Competencies');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Technical Skills:', margin, y);
  doc.setFont('helvetica', 'normal');
  const techSkills = 'Google Apps Script, Node.js, Python, Excel (Pivot Tables, VLOOKUP), ERP Systems.';
  const techLines = doc.splitTextToSize(techSkills, maxWidth - 35);
  doc.text(techLines, margin + 35, y);
  y += (techLines.length * 5) + 3;

  doc.setFont('helvetica', 'bold');
  doc.text('Financial Skills:', margin, y);
  doc.setFont('helvetica', 'normal');
  const finSkills = 'Accounts Payable, Data Reconciliation, Invoice Processing, Expense Management.';
  const finLines = doc.splitTextToSize(finSkills, maxWidth - 35);
  doc.text(finLines, margin + 35, y);
  y += (finLines.length * 5) + 8;

  // --- Experience ---
  addSectionTitle('Professional Experience');
  
  const experiences = [
    {
      company: 'Six Eleven Global Services',
      period: '03/2024 – 01/2026',
      role: 'Customer Service Representative / RTA',
      bullets: [
        'Primary point of contact for order entry and email inquiries; process customer orders and adjustments.',
        'Support AP readiness: input invoices into spreadsheets and prepare data for vendor reconciliation.',
        'Prepare spreadsheets using formulas and pivot tables for month-end checks and GL allocations.',
        'Train new CSRs on order processing and escalation procedures; recognized as top performer.'
      ]
    },
    {
      company: 'Tempestas ESports',
      period: '12/2020 – 12/2022',
      role: 'Administrative Support',
      bullets: [
        'Managed administrative workflows and internal spreadsheets supporting month-end tasks.',
        'Streamlined booking and reporting processes, improving data accuracy.',
        'Provided chat and email support for customer inquiries and order coordination.'
      ]
    }
  ];

  experiences.forEach(exp => {
    checkPage(35);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); 
    doc.text(exp.company, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, pageWidth - margin - periodWidth, y);
    
    y += 5;
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(71, 85, 105);
    doc.text(exp.role, margin, y);
    y += 6;
    
    doc.setTextColor(30, 41, 59);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    exp.bullets.forEach(bullet => {
      const bLines = doc.splitTextToSize('• ' + bullet, maxWidth - 5);
      doc.text(bLines, margin + 2, y);
      y += (bLines.length * 5);
    });
    y += 5;
  });

  // --- Education ---
  addSectionTitle('Education');
  checkPage(15);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('Bachelor of Information Technology', margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  const eduDate = '2020 – 2023';
  const eduDateWidth = doc.getTextWidth(eduDate);
  doc.text(eduDate, pageWidth - margin - eduDateWidth, y);
  
  y += 5;
  doc.setTextColor(71, 85, 105);
  doc.text('St. John Paul II College of Davao', margin, y);
  
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('Jerwin Cruspero - CV', margin, 287);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 15, 287);
  }

  doc.save('Jerwin_Cruspero_CV.pdf');
};
