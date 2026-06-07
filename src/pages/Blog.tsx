import { useEffect } from 'react'

const blogPosts = [
  {
    slug: 'free-pos-billing-software-india-2026',
    title: 'Best Free POS Billing Software for Indian Retail Shops in 2026',
    excerpt: 'A comprehensive guide to choosing free point-of-sale billing software for your Indian retail business — features, GST compliance, offline support, and why open source wins.',
    date: 'June 7, 2026',
    readTime: '12 min read',
    category: 'Guide',
    keywords: ['free POS software India', 'billing software for retail shop', 'GST billing software free', 'point of sale India'],
    content: `
      <p>If you run a retail shop in India, you've probably noticed that most POS billing software costs between ₹2,000–₹10,000 per month. For a kirana store or small boutique, that's a significant recurring expense that eats into already thin margins.</p>

      <p>The good news? In 2026, there are genuinely free alternatives that don't compromise on features. This guide breaks down what to look for, what to avoid, and why open-source POS is the smartest choice for Indian retailers.</p>

      <h2>What Makes a Good POS System for Indian Retail?</h2>

      <p>Before comparing options, let's define what "good" means in the Indian retail context:</p>

      <h3>1. GST Compliance is Non-Negotiable</h3>
      <p>Your billing software must generate GST-compliant invoices with correct CGST, SGST, and IGST calculations. It should support HSN codes, handle multiple tax slabs (0%, 5%, 12%, 18%, 28%), and generate GSTR-1 ready export data. If your software can't do this out of the box, it's not built for India.</p>

      <h3>2. Offline Capability</h3>
      <p>Internet connectivity in India is improving, but it's still unreliable in many areas. Your POS must work offline — creating bills, updating inventory, and processing sales without an internet connection. Data should sync automatically when connectivity returns.</p>

      <h3>3. Multi-Terminal Support</h3>
      <p>If you have more than one billing counter, your POS should support simultaneous billing across multiple terminals with real-time inventory synchronization. No duplicate bills, no stock conflicts.</p>

      <h3>4. Barcode Scanning</h3>
      <p>Manual entry is slow and error-prone. A good POS supports USB barcode scanners and camera-based scanning on tablets, with instant product lookup and auto-fill of price, GST rate, and product details.</p>

      <h3>5. UPI Payment Integration</h3>
      <p>With UPI transactions exceeding 14 billion per month in India, your POS should support QR code generation on receipts for Google Pay, PhonePe, and Paytm payments, with automatic reconciliation.</p>

      <h2>Free vs. Paid POS: What's the Real Difference?</h2>

      <p>Most "free" POS software in India follows a freemium model — basic features are free, but you pay for inventory management, multi-terminal support, or advanced reporting. This means you'll eventually hit a paywall for features you actually need.</p>

      <p>Open-source POS software like SwiftBill takes a different approach: every feature is free, forever. The code is publicly available, so you can verify exactly what the software does with your data. There are no hidden fees, no feature gates, and no vendor lock-in.</p>

      <table>
        <thead>
          <tr><th>Feature</th><th>Freemium POS</th><th>Open Source POS</th></tr>
        </thead>
        <tbody>
          <tr><td>Basic Billing</td><td>Free</td><td>Free</td></tr>
          <tr><td>Inventory Management</td><td>₹500–2,000/mo</td><td>Free</td></tr>
          <tr><td>Multi-Terminal</td><td>₹1,000–3,000/mo</td><td>Free</td></tr>
          <tr><td>Reports & Analytics</td><td>₹500–1,500/mo</td><td>Free</td></tr>
          <tr><td>Data Ownership</td><td>Vendor's servers</td><td>Your server</td></tr>
          <tr><td>Source Code Access</td><td>No</td><td>Yes (MIT License)</td></tr>
        </tbody>
      </table>

      <h2>Top Free POS Options for Indian Retail in 2026</h2>

      <h3>SwiftBill (Recommended)</h3>
      <p>SwiftBill is a fully open-source, self-hosted POS built specifically for Indian retail. It runs on any device with a web browser, supports up to 10 simultaneous billing terminals, and includes GST compliance, barcode scanning, UPI payments, inventory management, and demand analytics — all for ₹0.</p>
      <p><strong>Best for:</strong> Kirana stores, pharmacies, electronics shops, clothing boutiques, restaurants — any Indian retail business that wants complete control over their billing and data.</p>

      <h3>Key Advantages of Self-Hosted POS</h3>
      <p>When your POS runs on your own server (even a ₹8,000 laptop), your business data never leaves your premises. No cloud vendor can access your customer information, sales data, or supplier details. You're compliant with Indian data protection laws by default, and you're immune to price hikes or service shutdowns.</p>

      <h2>How to Choose the Right POS for Your Shop</h2>

      <p>Ask yourself these questions:</p>
      <ul>
        <li><strong>Do I need offline billing?</strong> If yes, avoid cloud-only solutions.</li>
        <li><strong>How many billing counters do I have?</strong> If more than one, ensure multi-terminal support is free.</li>
        <li><strong>Do I want to own my data?</strong> If yes, choose self-hosted.</li>
        <li><strong>Is GST compliance built in?</strong> Don't rely on plugins or add-ons for tax calculations.</li>
        <li><strong>What happens if the vendor shuts down?</strong> With open source, your software keeps working.</li>
      </ul>

      <h2>Getting Started</h2>
      <p>If you're ready to switch to free, open-source billing, you can set up SwiftBill in under 5 minutes. Clone the repository, install dependencies, and start billing. No registration, no credit card, no "talk to sales" — just code that works.</p>
      <p>For shops that want hands-off setup, there's a one-time Pro Setup service for ₹4,999 where the team handles everything for you.</p>
    `
  },
  {
    slug: 'gst-billing-compliance-guide-small-business',
    title: 'GST Billing Compliance Guide for Small Businesses in India (2026)',
    excerpt: 'Everything Indian small business owners need to know about GST-compliant billing — tax slabs, HSN codes, invoice formats, GSTR-1 filing, and how to automate it all.',
    date: 'June 5, 2026',
    readTime: '10 min read',
    category: 'GST Guide',
    keywords: ['GST billing compliance', 'GST invoice format India', 'GSTR-1 filing small business', 'HSN code billing'],
    content: `
      <p>GST compliance isn't optional for Indian businesses — but it doesn't have to be complicated either. If you're a small business owner generating more than ₹40 lakh in annual turnover (₹20 lakh for special category states), you need GST-compliant invoicing.</p>

      <p>This guide covers everything you need to know about GST billing in 2026, from invoice formats to GSTR-1 filing.</p>

      <h2>What Makes an Invoice GST-Compliant?</h2>

      <p>A valid GST invoice must contain the following 16 mandatory fields:</p>
      <ul>
        <li>Name, address, and GSTIN of the supplier</li>
        <li>Invoice number (unique, sequential, max 16 characters)</li>
        <li>Date of issue</li>
        <li>Name, address, and GSTIN of the recipient (for B2B)</li>
        <li>HSN code of goods or SAC code of services</li>
        <li>Description of goods or services</li>
        <li>Quantity and unit</li>
        <li>Total value before tax</li>
        <li>Taxable value after discounts</li>
        <li>GST rate applied (CGST + SGST or IGST)</li>
        <li>Amount of tax charged</li>
        <li>Place of supply (for IGST determination)</li>
        <li>Whether reverse charge applies</li>
        <li>Signature of the supplier</li>
      </ul>

      <h2>Understanding GST Tax Slabs</h2>

      <p>India's GST structure has five main tax slabs:</p>

      <table>
        <thead>
          <tr><th>GST Rate</th><th>Common Items</th></tr>
        </thead>
        <tbody>
          <tr><td>0% (Exempt)</td><td>Fresh vegetables, milk, eggs, bread, salt</td></tr>
          <tr><td>5%</td><td>Packaged food, sugar, tea, edible oil, footwear under ₹500</td></tr>
          <tr><td>12%</td><td>Processed food, computers, mobile phones</td></tr>
          <tr><td>18%</td><td>Most goods and services — electronics, restaurants, IT services</td></tr>
          <tr><td>28%</td><td>Luxury items, cars, tobacco, aerated drinks</td></tr>
        </tbody>
      </table>

      <h2>HSN Codes: What They Are and Why They Matter</h2>

      <p>HSN (Harmonized System of Nomenclature) codes are used to classify goods for taxation. Since April 2021, businesses with turnover above ₹5 crore must mention 6-digit HSN codes on invoices. Businesses with turnover between ₹1.5–5 crore need 4-digit codes.</p>

      <p>Getting HSN codes wrong can lead to incorrect tax calculation and compliance issues during GSTR-1 filing. Good billing software like SwiftBill has pre-configured HSN codes for common retail categories, so you don't have to look them up manually.</p>

      <h2>B2B vs. B2C Invoicing</h2>

      <h3>B2B Invoices</h3>
      <p>When selling to another registered business, you must include their GSTIN on the invoice. These transactions are reported individually in GSTR-1 under the B2B section and are used by the buyer to claim Input Tax Credit (ITC).</p>

      <h3>B2C Invoices</h3>
      <p>For sales to unregistered consumers, GSTIN is not required. B2C transactions under ₹2.5 lakh are reported as consolidated totals in GSTR-1. B2C transactions above ₹2.5 lakh (inter-state) are reported individually.</p>

      <h2>GSTR-1 Filing Made Simple</h2>

      <p>GSTR-1 is your monthly or quarterly return of outward supplies. It must be filed by the 11th of the following month (monthly) or the 13th of the month following the quarter (QRMP scheme).</p>

      <p>With POS software that automatically tags every invoice with the correct GST details, GSTR-1 filing becomes a one-click export. SwiftBill generates GSTR-1 ready data that you can directly share with your Chartered Accountant or upload to the GST portal.</p>

      <h2>Common GST Billing Mistakes to Avoid</h2>

      <ul>
        <li><strong>Wrong tax rate applied:</strong> Using 18% instead of 12% (or vice versa) creates mismatches during filing</li>
        <li><strong>Missing HSN codes:</strong> Mandatory for businesses above ₹1.5 crore turnover</li>
        <li><strong>Incorrect place of supply:</strong> Determines whether CGST+SGST or IGST applies</li>
        <li><strong>Non-sequential invoice numbers:</strong> Gaps in invoice numbering raise red flags during audits</li>
        <li><strong>Not segregating B2B and B2C:</strong> Required for correct GSTR-1 filing</li>
      </ul>

      <h2>Automating GST Compliance</h2>

      <p>The easiest way to stay GST-compliant is to use billing software that handles tax calculations automatically. When you add a product to SwiftBill, you set its GST rate and HSN code once. Every subsequent invoice automatically applies the correct tax, formats the invoice correctly, and tags it for GSTR-1 export.</p>
    `
  },
  {
    slug: 'offline-pos-billing-why-it-matters',
    title: 'Why Offline POS Billing Matters for Indian Retail in 2026',
    excerpt: 'Internet outages cost Indian retailers thousands in lost sales every month. Here\'s why offline-first billing software is essential and how to set it up.',
    date: 'June 3, 2026',
    readTime: '8 min read',
    category: 'Technology',
    keywords: ['offline POS India', 'billing without internet', 'offline billing software', 'retail technology India'],
    content: `
      <p>India's internet infrastructure has come a long way, but for retail shops — especially in tier-2 and tier-3 cities — connectivity is still inconsistent. A 30-minute internet outage during peak evening hours can mean dozens of lost sales and frustrated customers.</p>

      <p>This is why offline-first POS billing isn't a luxury feature — it's a necessity.</p>

      <h2>The Real Cost of Internet Dependency</h2>

      <p>Let's do the math. If your shop does ₹50,000 in daily sales across 8 operating hours, that's approximately ₹6,250 per hour. A one-hour internet outage — if your POS is cloud-dependent — costs you ₹6,250 in potential lost revenue. Over a month with just 2-3 such incidents, you're looking at ₹12,500–₹18,750 in lost sales.</p>

      <p>And that doesn't account for the customer experience damage. A customer who walks out because you "can't bill right now" may never come back.</p>

      <h2>How Offline POS Actually Works</h2>

      <p>An offline-first POS stores all critical data — product catalog, prices, GST rates, customer information — locally on the device. When you create a bill, it's processed entirely on the local machine. No internet required.</p>

      <p>Here's what happens behind the scenes:</p>
      <ul>
        <li><strong>Product database:</strong> Stored locally, updated when online</li>
        <li><strong>Bill generation:</strong> Processed on-device, receipt printed immediately</li>
        <li><strong>Inventory updates:</strong> Stock decremented locally in real-time</li>
        <li><strong>Data sync:</strong> When internet returns, all offline transactions sync automatically</li>
        <li><strong>Conflict resolution:</strong> Smart merging prevents duplicate entries</li>
      </ul>

      <h2>PWA Technology: The Best of Both Worlds</h2>

      <p>Progressive Web Apps (PWAs) are the ideal technology for offline POS in India. A PWA runs in your web browser but behaves like a native app — it works offline, loads instantly, and can be installed on any device without an app store.</p>

      <p>SwiftBill uses PWA technology to deliver offline billing capability. Once you've loaded the app, it continues working even if your internet drops completely. Bills sync when connectivity returns.</p>

      <h2>Self-Hosted vs. Cloud: What's Better for Indian Conditions?</h2>

      <p>Cloud-based POS systems (like Zoho POS, Petpooja, or GoFrugal) route every transaction through their servers. This means:</p>
      <ul>
        <li>Billing stops when internet stops</li>
        <li>Slow internet = slow billing</li>
        <li>Monthly subscription fees (₹1,000–₹5,000/month)</li>
        <li>Your data lives on someone else's server</li>
      </ul>

      <p>Self-hosted POS systems run on your own hardware. This means:</p>
      <ul>
        <li>Bills are processed locally — no internet needed</li>
        <li>Speed depends on your hardware, not your ISP</li>
        <li>One-time setup, no recurring costs</li>
        <li>Complete data ownership and privacy</li>
      </ul>

      <h2>Minimum Hardware Requirements</h2>

      <p>You don't need expensive hardware to run a self-hosted POS. Here's what works:</p>
      <ul>
        <li><strong>Laptop/Desktop:</strong> Any machine with 4GB RAM and a web browser (even a ₹8,000 refurbished laptop)</li>
        <li><strong>Tablet:</strong> Android tablet with Chrome for a touch-based billing experience</li>
        <li><strong>Receipt printer:</strong> Any thermal printer (USB or Bluetooth, ₹2,000–₹5,000)</li>
        <li><strong>Barcode scanner:</strong> USB scanner (₹800–₹2,000) or use the device camera</li>
      </ul>

      <h2>Setting Up Offline Billing</h2>

      <p>With SwiftBill, offline billing works out of the box. Install the software on your local machine, add your products, and start billing. No cloud account needed. No internet dependency. Your shop runs independently.</p>

      <p>For multi-terminal setups, all terminals connect to a local server on your network. Even if your internet goes down, all terminals continue billing and sharing inventory data over your local WiFi.</p>
    `
  },
  {
    slug: 'kirana-store-digital-transformation-guide',
    title: 'How to Digitize Your Kirana Store: A Complete 2026 Guide',
    excerpt: 'Step-by-step guide for kirana store owners to go digital — from billing software to inventory management, UPI payments, and customer loyalty programs.',
    date: 'June 1, 2026',
    readTime: '15 min read',
    category: 'Business',
    keywords: ['kirana store digital', 'digitize retail shop India', 'small shop billing software', 'kirana store management'],
    content: `
      <p>India has over 12 million kirana stores — small neighborhood grocery and general stores that form the backbone of Indian retail. Despite the rise of e-commerce and quick-commerce, kirana stores still account for nearly 80% of India's retail market.</p>

      <p>But here's the challenge: most kirana stores still operate with handwritten bills, manual stock counts, and cash-only transactions. In 2026, digital tools have become affordable (and even free) enough that every kirana store can — and should — modernize.</p>

      <h2>Why Digitize Now?</h2>

      <p>The benefits of digitization go beyond just looking "modern":</p>
      <ul>
        <li><strong>Faster billing:</strong> Barcode scanning + digital billing is 3–5x faster than handwriting</li>
        <li><strong>Accurate inventory:</strong> Know exactly what's in stock, what's running low, and what's not selling</li>
        <li><strong>GST compliance:</strong> Automatic tax calculation and invoice generation</li>
        <li><strong>Customer insights:</strong> Track buying patterns, offer targeted deals</li>
        <li><strong>UPI payments:</strong> Don't lose sales because customers don't carry cash</li>
        <li><strong>Reduced theft:</strong> Digital records make pilferage harder to hide</li>
      </ul>

      <h2>Step 1: Choose Your Billing Software</h2>

      <p>This is the foundation. Your billing software should be:</p>
      <ul>
        <li>Free or very low cost (you're a kirana store, not a supermarket)</li>
        <li>Easy to use (your staff may not be tech-savvy)</li>
        <li>GST-compliant (mandatory if turnover exceeds ₹40 lakh)</li>
        <li>Offline-capable (internet isn't reliable everywhere)</li>
        <li>Hindi/regional language support (for staff comfort)</li>
      </ul>

      <p>SwiftBill checks all these boxes and is completely free. It runs on any device with a web browser — even an old laptop or a ₹10,000 Android tablet.</p>

      <h2>Step 2: Set Up Your Product Catalog</h2>

      <p>This is the most time-consuming step, but you only do it once. Enter all your products with:</p>
      <ul>
        <li>Product name</li>
        <li>Category (grocery, dairy, snacks, beverages, etc.)</li>
        <li>MRP and selling price</li>
        <li>GST rate and HSN code</li>
        <li>Current stock quantity</li>
        <li>Barcode number (from the product packaging)</li>
      </ul>
      <p>Pro tip: Start with your top 100 selling items. Add the rest gradually. Most POS software supports CSV bulk import if you have a spreadsheet.</p>

      <h2>Step 3: Get a Barcode Scanner</h2>

      <p>A USB barcode scanner costs ₹800–₹2,000 and dramatically speeds up billing. Scan the product barcode, and the POS automatically fills in the product name, price, and tax — no manual lookup needed.</p>
      <p>For tablet-based setups, you can use the built-in camera as a scanner, though dedicated USB scanners are faster and more reliable.</p>

      <h2>Step 4: Set Up UPI Payments</h2>

      <p>Over 60% of Indian consumers prefer digital payments. Set up your UPI ID in your billing software, and every receipt will automatically include a QR code that customers can scan to pay.</p>
      <p>Your POS should track cash vs. digital payments separately, making end-of-day reconciliation effortless.</p>

      <h2>Step 5: Train Your Staff</h2>

      <p>The biggest barrier to digital adoption isn't technology — it's training. Spend one day training your staff on the new system. Focus on:</p>
      <ul>
        <li>Creating a new bill</li>
        <li>Searching for products</li>
        <li>Applying discounts</li>
        <li>Processing returns</li>
        <li>Printing receipts</li>
      </ul>
      <p>Most modern POS systems have keyboard shortcuts that make billing even faster once staff are familiar with them.</p>

      <h2>Step 6: Use Inventory Insights</h2>

      <p>After a month of digital billing, you'll have data. Use it:</p>
      <ul>
        <li><strong>Top sellers:</strong> Never let these go out of stock</li>
        <li><strong>Slow movers:</strong> Consider discounting or discontinuing</li>
        <li><strong>Peak hours:</strong> Staff accordingly</li>
        <li><strong>Seasonal patterns:</strong> Stock up before festivals</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>Digitizing your kirana store isn't about spending money on technology. It's about saving money through efficiency, accuracy, and insight. With free tools like SwiftBill, the barrier to entry is zero. The only investment is your time — and that pays for itself within the first month.</p>
    `
  },
  {
    slug: 'open-source-pos-vs-commercial-comparison',
    title: 'Open Source POS vs. Commercial POS: An Honest Comparison for 2026',
    excerpt: 'Should you choose open-source or commercial POS software? We compare cost, features, security, support, and long-term viability for Indian businesses.',
    date: 'May 28, 2026',
    readTime: '11 min read',
    category: 'Comparison',
    keywords: ['open source POS vs commercial', 'POS software comparison India', 'best POS system India 2026', 'retail software comparison'],
    content: `
      <p>When choosing POS software for your business, one of the first decisions is whether to go with a commercial solution (like Busy, Marg, TallyPrime) or an open-source alternative (like SwiftBill). Both have genuine strengths and weaknesses.</p>

      <p>This article is an honest comparison — we'll cover where open source wins, where commercial software wins, and help you decide which is right for your specific situation.</p>

      <h2>Cost Comparison</h2>

      <h3>Commercial POS</h3>
      <ul>
        <li>Upfront license: ₹5,000–₹50,000</li>
        <li>Annual maintenance: ₹2,000–₹10,000/year</li>
        <li>Per-terminal fees: ₹1,000–₹3,000/month per additional terminal</li>
        <li>Cloud hosting: ₹500–₹2,000/month</li>
        <li>5-year total cost: ₹30,000–₹3,00,000+</li>
      </ul>

      <h3>Open Source POS</h3>
      <ul>
        <li>Software: ₹0</li>
        <li>Setup (DIY): ₹0</li>
        <li>Setup (professional help): ₹3,000–₹5,000 one-time</li>
        <li>Hosting: ₹0 (self-hosted on your own hardware)</li>
        <li>5-year total cost: ₹0–₹5,000</li>
      </ul>

      <h2>Feature Comparison</h2>

      <table>
        <thead>
          <tr><th>Feature</th><th>Commercial</th><th>Open Source</th></tr>
        </thead>
        <tbody>
          <tr><td>GST Compliance</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Barcode Scanning</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Multi-Terminal</td><td>Paid add-on</td><td>Free (up to 10)</td></tr>
          <tr><td>Offline Mode</td><td>Some</td><td>Yes (PWA)</td></tr>
          <tr><td>UPI Integration</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Inventory Management</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Custom Reports</td><td>Limited</td><td>Unlimited (code access)</td></tr>
          <tr><td>Source Code</td><td>No</td><td>Full access</td></tr>
          <tr><td>Data Location</td><td>Vendor's cloud</td><td>Your server</td></tr>
        </tbody>
      </table>

      <h2>Security and Data Ownership</h2>

      <p>This is where the difference is most significant. With commercial POS, your sales data, customer information, and business analytics live on someone else's servers. You trust the vendor's security practices, and you're subject to their privacy policy.</p>

      <p>With self-hosted open source POS, data never leaves your premises. You control access, you control backups, and you control what happens to it. For businesses handling sensitive customer data, this is a critical advantage.</p>

      <h2>Support Comparison</h2>

      <h3>Commercial POS Advantage</h3>
      <p>Commercial software typically includes dedicated customer support — phone, email, and sometimes on-site technicians. For businesses without technical staff, this is valuable.</p>

      <h3>Open Source Support</h3>
      <p>Open source projects rely on community support — documentation, forums, and GitHub issues. Some projects (like SwiftBill) offer paid professional setup and priority support for businesses that need it. The trade-off is that community support may be slower, but the community is often more knowledgeable about the software's internals.</p>

      <h2>Long-Term Viability</h2>

      <p>What happens if your POS vendor shuts down? With commercial software, you're out of luck — your software stops working, and your data may be inaccessible.</p>

      <p>With open source, the code is yours. Even if the original developers move on, the software continues to work. The community can maintain it, or you can hire a developer to update it. Your business is never held hostage.</p>

      <h2>Who Should Choose What?</h2>

      <p><strong>Choose commercial POS if:</strong></p>
      <ul>
        <li>You have zero technical capability and can't hire any</li>
        <li>You need phone-based customer support in regional languages</li>
        <li>Budget is not a primary concern</li>
        <li>You need specific industry integrations (like Swiggy/Zomato for restaurants)</li>
      </ul>

      <p><strong>Choose open source POS if:</strong></p>
      <ul>
        <li>Cost matters (most Indian retail businesses)</li>
        <li>You want data ownership and privacy</li>
        <li>You have basic technical capability (or can hire someone for setup)</li>
        <li>You want the freedom to customize</li>
        <li>You're building for the long term</li>
      </ul>
    `
  },
  {
    slug: 'inventory-management-tips-small-retailers',
    title: '10 Inventory Management Tips Every Small Indian Retailer Should Know',
    excerpt: 'Practical inventory management strategies for Indian retail shops — from ABC analysis to reorder points, demand forecasting, and reducing dead stock.',
    date: 'May 25, 2026',
    readTime: '9 min read',
    category: 'Tips',
    keywords: ['inventory management tips India', 'small retail inventory', 'stock management retail shop', 'reduce dead stock'],
    content: `
      <p>Poor inventory management is the silent killer of small retail businesses. Overstocking ties up capital. Understocking loses sales. Dead stock wastes shelf space. For Indian retailers operating on thin margins, getting inventory right is the difference between profit and loss.</p>

      <p>Here are 10 practical tips that work for real Indian retail shops.</p>

      <h2>1. Use ABC Analysis to Prioritize</h2>
      <p>Not all products deserve equal attention. Classify your inventory into three categories:</p>
      <ul>
        <li><strong>A items (top 20%):</strong> Generate 80% of revenue. Monitor daily, never let these go out of stock.</li>
        <li><strong>B items (next 30%):</strong> Generate 15% of revenue. Check weekly.</li>
        <li><strong>C items (bottom 50%):</strong> Generate 5% of revenue. Monthly review is sufficient.</li>
      </ul>

      <h2>2. Set Reorder Points for Fast-Moving Items</h2>
      <p>Calculate when to reorder: Reorder Point = (Average Daily Sales × Lead Time in Days) + Safety Stock. For example, if you sell 20 units of Maggi daily and your supplier takes 3 days to deliver, with 1 day safety stock: Reorder at 20 × 4 = 80 units.</p>

      <h2>3. Track Expiry Dates Religiously</h2>
      <p>For grocery, pharmacy, and FMCG retailers, expired stock is money thrown away. Use FIFO (First In, First Out) — always sell older stock first. Your POS should alert you when products are approaching expiry so you can discount them before it's too late.</p>

      <h2>4. Count Stock Regularly (But Smartly)</h2>
      <p>Don't try to count everything at once. Use cycle counting — count a small section of inventory each day. Over a month, you'll have covered your entire inventory without disrupting operations.</p>

      <h2>5. Identify and Eliminate Dead Stock</h2>
      <p>Products that haven't sold in 90 days are dead stock. They're using shelf space that could hold profitable items. Options: deep discount, bundle with popular items, or return to supplier.</p>

      <h2>6. Negotiate Better with Data</h2>
      <p>When you have digital records of your purchasing patterns, you can negotiate better with suppliers. "I buy 500 units of your product monthly" is more powerful when backed by actual data from your POS system.</p>

      <h2>7. Monitor Seasonal Patterns</h2>
      <p>Indian retail is highly seasonal — festivals, monsoon, summer, and winter all affect what sells. After a year of digital billing, you'll have data to predict demand and stock accordingly. Pre-load for Diwali, Holi, and back-to-school seasons.</p>

      <h2>8. Use Demand Forecasting</h2>
      <p>Modern POS systems like SwiftBill include demand analytics that show you trends in what's selling more, what's declining, and what's seasonal. Use these insights to make purchasing decisions instead of gut feeling.</p>

      <h2>9. Manage Supplier Lead Times</h2>
      <p>Not all suppliers deliver at the same speed. Track lead times for each supplier and factor this into your reorder points. A supplier who takes 7 days needs more safety stock than one who delivers next day.</p>

      <h2>10. Automate Everything You Can</h2>
      <p>Manual inventory management doesn't scale. Once you have more than 200 products, spreadsheets become unmanageable. Use billing software that automatically decrements stock when you make a sale and alerts you when items hit reorder points.</p>

      <h2>The Compound Effect</h2>
      <p>Each of these tips individually makes a small difference. Combined, they can reduce your inventory costs by 15–25% while simultaneously reducing stockouts. For a shop doing ₹10 lakh monthly, that's ₹1.5–2.5 lakh saved per year — just from better inventory management.</p>
    `
  },
]

function BlogPostCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <a href={`/blog/${post.slug}`} className="group block">
      <article className="p-6 sm:p-8 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-border transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] tracking-wide uppercase">
            {post.category}
          </span>
          <span className="text-[13px] text-muted-foreground">{post.date}</span>
          <span className="text-[13px] text-muted-foreground">·</span>
          <span className="text-[13px] text-muted-foreground">{post.readTime}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-300 mb-3 leading-tight">
          {post.title}
        </h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read article
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </article>
    </a>
  )
}

function BlogPostFull({ post }: { post: typeof blogPosts[0] }) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <a href="/blog" className="inline-flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors mb-6">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Blog
        </a>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] tracking-wide uppercase">
            {post.category}
          </span>
          <span className="text-[13px] text-muted-foreground">{post.date}</span>
          <span className="text-[13px] text-muted-foreground">·</span>
          <span className="text-[13px] text-muted-foreground">{post.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-foreground leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
      </div>
      <div
        className="prose prose-invert max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
          [&_p]:text-[16px] [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-5
          [&_ul]:text-[15px] [&_ul]:text-muted-foreground [&_ul]:leading-relaxed [&_ul]:mb-5 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2
          [&_li]:text-muted-foreground
          [&_strong]:text-foreground [&_strong]:font-semibold
          [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse
          [&_th]:text-left [&_th]:px-4 [&_th]:py-3 [&_th]:text-[13px] [&_th]:font-semibold [&_th]:text-foreground [&_th]:bg-muted/50 [&_th]:border [&_th]:border-border/50
          [&_td]:px-4 [&_td]:py-3 [&_td]:text-[14px] [&_td]:text-muted-foreground [&_td]:border [&_td]:border-border/50
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-12 pt-8 border-t border-border/50">
        <div className="p-6 sm:p-8 rounded-2xl bg-[hsl(var(--primary)/0.05)] border border-[hsl(var(--primary)/0.1)]">
          <h3 className="text-lg font-bold text-foreground mb-2">Try SwiftBill — Free forever</h3>
          <p className="text-[14px] text-muted-foreground mb-4">Open-source POS billing software built for Indian retail. GST compliant, offline capable, multi-terminal support.</p>
          <div className="flex flex-wrap gap-3">
            <a href="/" className="px-5 py-2.5 rounded-lg bg-[hsl(var(--primary))] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </a>
            <a href="https://github.com/saurabhwebdev/swiftbill" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-border text-[14px] font-semibold text-foreground hover:bg-muted/50 transition-colors">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Blog() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/blog'
  const slug = path.replace('/blog/', '').replace('/blog', '')
  const post = slug ? blogPosts.find(p => p.slug === slug) : null

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — SwiftBill Blog`
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt)
    } else {
      document.title = 'Blog — SwiftBill | Free POS Billing Software for Indian Retail'
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', 'Expert guides on POS billing, GST compliance, inventory management, and retail technology for Indian businesses. By SwiftBill — free, open-source billing software.')
    }
  }, [post])

  if (post) {
    return (
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <BlogPostFull post={post} />
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert guides on POS billing, GST compliance, inventory management, and retail technology for Indian businesses.
          </p>
        </div>
        <div className="space-y-6">
          {blogPosts.map(post => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
