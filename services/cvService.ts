
export const downloadCV = async () => {
  // The jspdf CDN script puts the library in window.jspdf.jsPDF
  const jspdfModule = (window as any).jspdf;
  
  if (!jspdfModule || !jspdfModule.jsPDF) {
    console.error("jsPDF library not fully loaded");
    alert("The PDF generator is still loading. Please try again in a moment.");
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

  // --- Content Generation ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(37, 99, 235);
  doc.text('JERWIN CRUSPERO', margin, y);
  y += 10;

  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'normal');
  doc.text('Accounts Payable Specialist | Automation Expert', margin, y);
  y += 6;
  
  doc.setFontSize(9);
  doc.text('Davao City, Philippines | +63 991 474 0695', margin, y);
  y += 5;
  doc.text('Email: jcruspero3263@gmail.com', margin, y);
  y += 10;

  // Add a line
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // Professional Summary
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(37, 99, 235);
  doc.text('PROFESSIONAL SUMMARY', margin, y);
  y += 7;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  const summary = "Highly skilled Professional with a background in Customer Service and a focus on automation. Expert in leveraging Google Apps Script, Node.js, and Excel to streamline financial workflows. Seeking to apply technical aptitude to an Accounts Payable role.";
  const summaryLines = doc.splitTextToSize(summary, maxWidth);
  doc.text(summaryLines, margin, y);
  y += (summaryLines.length * 5) + 10;

  // Experience Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(37, 99, 235);
  doc.text('PROFESSIONAL EXPERIENCE', margin, y);
  y += 7;

  // Experience 1
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Six Eleven Global Services', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text('03/2024 – 01/2026', pageWidth - margin - 30, y);
  y += 5;
  doc.setFont('helvetica', 'italic');
  doc.text('Customer Service Representative / RTA', margin, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('• Primary point of contact for order entry and email inquiries.', margin + 2, y);
  y += 5;
  doc.text('• Support AP readiness: input invoices and prepare data for reconciliation.', margin + 2, y);
  y += 10;

  // Education
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(37, 99, 235);
  doc.text('EDUCATION', margin, y);
  y += 7;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Information Technology', margin, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('St. John Paul II College of Davao | 2020 – 2023', margin, y);

  doc.save('Jerwin_Cruspero_CV.pdf');
};
