# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)


## Unreleased as of Sprint 68 ending 2017-09-04

### Added
- Trees
  - Fix miqTreeObject to work again with non-angularized trees [(#2073)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2073)
- Compute
  - Add link to network manager for infra providers [(#2028)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2028)
  - Quad icons for containers providers [(#1950)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1950)
  - Add support for displaying network adapter details [(#1654)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1654)
  - Add support for monitoring selection in UI [(#1501)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1501)
  - Add alerts to dashboard [(#1234)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1234)
- User Interface
  - Verify button component [(#2017)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2017)
  - Take monitoring out of prototype [(#1982)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1982)
  - Styling updates to accompany new pagination [(#1951)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1951)
  - Add widget-rss component and method to load data [(#1841)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1841)
  - Add widget-chart component and method to get data [(#1832)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1832)
  - Allow MIQ defined Users to belong to multiple Groups [(#1752)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1752)
  - Add prometheus view to ad hoc metrics [(#1677)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1677)
- Notifications
  - Use the error modal for API errors as well [(#1976)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1976)
- Automate
  - Introducing a controller that returns automate entry point tree JSON [(#1949)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1949)
  - Add custom buttons [(#1912)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1912)
  - Filter custom buttons according to visibility expressions [(#1824)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1824)

### Fixed
- Performance
  - Fix bad use of constant in planning [(#2074)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2074)
- Automate
  - Hide the form_buttons_div when not required on CustomButtons screen [(#2072)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2072)
  - Add 'submit' and 'cancel' buttons to service dialogs by default [(#1985)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1985)
  - Add Validation as a requirement prior to a Save for Ansible and Foreman Providers [(#1850)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1850)
- Providers
  - Enable Cockpit console for RHOS provider [(#2039)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2039)
- Notifications
  - Close button on the right even when expanded [(#2036)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2036)
- Middleware
  - Fix breakage to MW Add JDBC Driver [(#2030)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2030)
- User Interface
  - Disable VM transform button when op not possible [(#2024)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2024)
  - Chart widget has three states - no data valid/invalid data [(#2021)](https://github.com/ManageIQ/manageiq-ui-classic/pull/2021)
  - Fix filter tab for chargeback report for all providers [(#1990)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1990)
  - Fix logic error when displaying Cockpit button [(#1988)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1988)
- Compute
  - Show card only for single provider [(#1968)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1968)
  - CloudTenant uses GenericButtonMixin for tagging [(#1964)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1964)
  - Block unsupported VMs reset [(#1924)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1924)
  - Additional features to the container image list view [(#1840)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1840)
- Reporting
  - Allow to see saved chargeback report after linked MiqTask deleted [(#1965)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1965)
- Core
  - Specify correct features names in Block/Object Storage toolbar button actions [(#1908)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1908)
- Ansible Tower
  - Manager nodes with no children should be visible in the providers tree [(#1709)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1709)

## Unreleased as of Sprint 67 ending 2017-08-21

### Fixed
- Use to_s instead of message [(#1960)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1960)
- get_db_view - remove all_vms_and_templates association for infra vms as well [(#1957)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1957)
- cloud network: consolidate new and edit [(#1955)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1955)
- Added missing routes for expression editor. [(#1952)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1952)
- Container list - fix Cannot read property subscribe of undefined [(#1948)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1948)
- Remove extra : [(#1927)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1927)
- Add missing "migrating" power state image [(#1920)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1920)
- Change webpacker to store plugin javascript in corespoding folder [(#1919)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1919)
- Menu active item fixes [(#1915)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1915)
- Hide History toolbar when in Reports Import/Export tree [(#1909)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1909)
- Skip calling Rbac on a null or nil target_class [(#1906)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1906)
- Use class variable gtl_type to check type of report this way we will receive correct report type [(#1888)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1888)
- Allow rake update:ui to work without db connection [(#1887)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1887)
- Delete dupe warning message in Optimize Bottlenecks [(#1886)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1886)
- Menu: Don't remember iframes. [(#1883)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1883)
- v2v: Move Transform button to "Lifecycle" group [(#1878)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1878)
- Fix wrong breadcrumb link when click on Service Catalog [(#1873)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1873)
- Do not try to render quadicon if rendering report with list [(#1867)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1867)
- Delete duplicate flash message for Automation Method Edit page actions [(#1851)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1851)
- Set correct db value for Provider Foreman case [(#1847)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1847)
- $validators return true/false [(#1846)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1846)
- miqFormatNotification - don't throw when missing text [(#1836)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1836)
- Reverse-merge tree params if the tree is already in the sandbox [(#1830)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1830)
- Make tooltip precision for CU chart constistent with Y axis labels [(#1807)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1807)
- Fixed save of RH satellite 6 subscription [(#1783)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1783)
- Fix title in Add/Edit Button/Button Groups [(#1592)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1592)
- If provider is not running and UI wants to fetch JDBC drivers close datasource modal [(#1435)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1435)

### Added
- Removed Waiting_to_start from the list of possible states for MiqTask [(#1959)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1959)
- Changed label "Location" to "Type" made field read-only after selection [(#1938)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1938)
- Report data api per page [(#1864)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1864)
- Network provider fields [(#1862)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1862)
- Fix missing custom button coloring in toolbars [(#1861)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1861)
- Add evaluation of enablement expression and displayed text to custom button [(#1828)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1828)
- Add widget-report component and method to get data [(#1805)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1805)
- Change discover to make lenovo provider discovery [(#1785)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1785)
- Add widget-menu component and method to get data [(#1780)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1780)
- Optional chargeback allocated calculation  [(#1738)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1738)
- Expose provider disable for containers providers [(#1663)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1663)

### Removed
- Remove get route for report data [(#1834)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1834)

### Changed
- Expression method ui changes [(#1668)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1668)
- Use scope instead of a query to get soft-deleted items [(#1462)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1462)


## Unreleased - as of Sprint 66 end 2017-08-07

### Added
- Automation-Automate
  - Create a box in new dialog automatically [(#1791)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1791)
  - Generic Object Instances UI - `show_list` and `show` [(#1765)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1765)
  - Use the fonticon picker component to pick custom button icons [(#1801)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1801)
- Compute-Containers
  - Add container limits to container summary page [(#1401)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1401)
  - Kibana SSO encoding of query parameters in the url [(#1741)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1741)
- Formatting-Styling: Introducing custom and colored fonticons for CustomButtons [(#1685)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1685)
- Generic Objects
  - Generic Object Classes Listview - bells and whistles [(#1788)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1788)
  - Generic Objects UI [(#1724)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1724)
  - fonticon and fileicon for Generic Object Definition records [(#1787)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1787)
  - Update generic object decorator [(#1825)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1825)
  - Updating generic object defintion decorator [(#1812)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1812)
  - Add more details in Generic Object Class Summary screen [(#1800)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1800)
- GTLs: Report data api [(#1750)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1750)
- Toolbars: Enablement and Visibility expression UI for custom buttons [(#1792)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1792)
- Services: Added input field for max playbook_ttl value [(#1742)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1742)

### Fixed
- Automation-Automate
  - Adding an Automate Task schedule: remove time_zone as the last Attribute/Value pair [(#1794)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1794)
  - Changed Domain/Namespace add/edit flash messages to be consistent [(#1814)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1814)
  - Correct label text wording for Custom Button Group summary page. [(#1777)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1777)
  - Corrected duplicate flash message of reset button in priority order [(#1813)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1813)
- Cloud-Intel
  - Fixed issue with downloading report [(#1827)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1827)
  - Fixed code to only set data/headers if column exists in Report col headers. [(#1842)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1842)
- Compute-Cloud: Fix button actions on Availability Zone nested resources [(#1631)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1631)
- Display checkable folders in the Alert Profile Assignment tree for `ems_folder` [(#1747)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1747)
- Fix HAML indentation for Report Widget fragment [(#1782)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1782)
- Zone select shows only zones in current region [(#1769)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1769)
- Allow copying/focusing in disabled codemirror editor [(#1758)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1758)
- Change GET to POST route report data [(#1833)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1833)
- Fix a syntax error in miq_qe.js [(#1799)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1799)
- restyle cell so that Instance Type doesn't wrap [(#1746)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1746)
- Modify the API params to support filtering on non-column methods [(#1711)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1711)

## Unreleased - as of Sprint 65 end 2017-07-24

### Added
- Automation-Automate: Adding Dialog Editor into Ops UI [(#1398)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1398)
- Compute-Physical: Display Physical Servers with Host in Physical Infra Textual Summary and listnav [(#1553)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1553)
- Notifications: Notifications drawer - add a close button [(#1720)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1720)
- Storage: Render iops and encrypted for cloud volume edit form [(#1642)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1642)

### Fixed
- Automation-Ansible
  - Fix icon for Ansible credential add button [(#1687)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1687)
- Automation-Automate
  - Dialog editor fixes [(#1728)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1728)
  - Fixed issue with custom button editing [(#1686)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1686)
  - Alter Button Group hover text [(#1735)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1735)
  - Broken titles for automate buttons in new and edit dialog [(#1716)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1716)
- Compute
  - Cloud
    - Added a ems_id existence check around VM VNC console button visibility [(#1723)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1723)
    - Fix Power actions for Instances in Orchestration Stack page [(#1696)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1696)
    - Fix Evacuate form [(#1676)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1676)
    - Fix typo [(#1707)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1707)
  - Continers: Strip html tags before sending error details to flash message [(#1712)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1712)
  - Infrastructure
    - Disable delete button for the active snapshot on oVirt [(#1628)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1628)
  - Physical Infrastructure: Hide firmware table if there are no firmware entries [(#1694)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1694)
- Dashboard: Revert "Fix missing constant in application_controller" [(#1692)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1692)
- Expressions-Filters: Use a dropdown for a boolean user input field in Advanced Search [(#1334)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1334)
- Graphics
  - Add missing ansible worker image [(#1734)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1734)
  - Add missing configuration_script_source.png to fix PDF generation [(#1706)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1706)
- Intel-Chargeback: UI Fix for ChargeableField in chargeback editor [(#1727)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1727)

## Unreleased - as of Sprint 64 end 2017-07-10

### Added
- Automation-Automate: Custom button submit all [(#1572)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1572)
- Compute
  - Containers: Added "Create Service Dialog from Container Template" support [(#1591)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1591)
  - Physical Infrastructure: Added hosts and vms relationship with physical server to physical Infra topology [(#1570)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1570)
  - Services: Added "Container Template" type support in Catalog Item editor [(#1634)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1634)

### Changed
- Update patternfly-timeline to 1.0.5 [(#1573)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1573)

### Fixed
- Automation-Ansible
  - Add Tags to Ansible Tower Provider and Foreman Provider [(#1534)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1534)
  - Error when navigating from the Ansible repository to the playbook list [(#1532)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1532)
  - Changed max length of name and description fields to be consistent [(#1590)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1590)
  - Get right fields in Adv search in Automation Ansible Tower [(#1164)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1164)
- Cloud-Intel-Reporting
  - Fix Report full screen view should be in a new window [(#1641)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1641)
  - Enabled 'Delete Saved Report' toolbar button [(#1589)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1589)
- Compute
  - Cloud
    - Only use supports_reset check for displaying reset button [(#1598)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1598)
  - Containers
    - Fix PDF download button for persistent volume [(#1624)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1624)
  - Infrastructure: Add RBAC check for Right Size Recommendation [(#1538)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1538)
  - Physical Infrastructure
    - Fix display of hosts on physical infra topology [(#1609)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1609)
    - Fix network address issue [(#1588)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1588)
- Console
  - app: Redirect to cockpit [(#1649)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1649)
- GTLs: Do not run move of new pagination and remove of old one when new one is present [(#1556)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1556)
- Networks
  - Use matching via descendants for CloudNetwork model [(#1474)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1474)
- Settings
 - Remove "items" keyword from list in my settings [(#1587)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1587)
 - Fix error when saving trusted forest settings [(#1566)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1566)
- Expressions-Filters: Set Field value to a blank value to avoid crashes due to a nil value [(#1637)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1637)
- Storage: add force option to cloud volume create form [(#1623)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1623)
- Trees: Add missing datastore nodes to HaC tree  [(#1635)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1635)

## Unreleased - as of Sprint 63 end 2017-06-19

### Added
- Compute
  - Cloud: Show last refresh time & date in provider summary screen [(#1518)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1518)
  - Containers
    - Hawkular hostname detection changes [(#1304)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1304)
    - Add differential chart option to charts [(#1367)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1367)
    - Support for Prometheus in Container Provider summary page [(#1525)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1525)
  - Infrastructure: Show VM's MAC address in textual summary [(#1517)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1517)
  - Middleware: Rendering status for servers and deployments in middleware topology [(#1461)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1461)
  - Networks: Include ems ref on the Cloud Network summary page [(#1521)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1521)
  - Physical Infrastructure
    - Set default port for lenovo provider form to 443 [(#1531)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1531)
    - Show hosts relationship in physical infra listnav [(#1495)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1495)
    - Add more columns to display Physical Server details [(#1506)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1506)
    - Display Host relationship in the Physical Infra Topology [(#1505)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1505)
    - Displayed number of relationships between Hosts and Physical Server [(#1458)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1458)
    - Support Physical Infrastructure policies in the UI [(#1504)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1504)
    - Physical Server quadicon  [(#1173)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1173)
    - Add Physical Server relationship for Host summary page [(#1440)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1440)

### Fixed
- Angular: Remove "Confirm Password" input field previously required for Validation [(#1335)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1335)
- Cloud-Intel-Reporting
  - Fix 'Download TXT' for nested list resources [(#1529)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1529)
- Compute
  - Rename 'Cockpit Console' to 'Web Console' per cockpit product integration guidelines [(#1548)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1548)
  - Containers
    - Check for base unit when adjusting unit label [(#1447)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1447)
  - Physical Infrastructure
    - Add format to physical server report [(#1480)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1480)
    - Fix Physical Server link in Physical Infra Summary page [(#1479)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1479)
- Control
  - All Conditions - use same folder icons as in tree [(#1551)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1551)
  - Alerts with resolved=nil should be visible [(#1503)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1503)
- Middleware: Fix middleware providers broken links in timeline events [(#1492)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1492)
- Settings
  - Fix Features Tree for "everything under" features [(#1229)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1229)
  - Fix the placement of form buttons on the ops screens [(#1500)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1500)

## Unreleased - as of Sprint 62 end 2017-06-5

### Added
- Compute: Physical Infrastructure
  - Add quick search and Advanced search to Physical Servers [(#1416)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1416)
  - Add support for displaying firmware details [(#1251)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1251)
  - Implement Physical Server Toolbar actions with API [(#1380)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1380)
- Core: Introducing the font-fabulous gem [(#1463)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1463)
- Storage: Support base snapshot for EBS cloud volume provisioning [(#1324)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1324)
- Toolbars: Introducing pluggable menus [(#1454)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1454)

### Fixed
- Automation-Ansible
  - Add reload button to Ansible Repositories [(#1366)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1366)
  - Changed icon for the button for consistency [(#1437)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1437)
- Cloud-Intel-Reporting
  - Use for fetching report result status of MiqTask [(#1482)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1482)
- Compute
  - Cloud
    - Rename 'Web Console' to 'Cockpit Console' [(#1429)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1429)
  - Containers
    - Tweak ad hoc page layout [(#1364)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1364)
    - Fix filter menu dropdown cutoff [(#1433)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1433)
  - Infrastructure
    - Remove association for template only [(#1290)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1290)
- Settings
  - miq_tabs_init - use observe queue for tab switching too [(#1179)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1179)

## Unreleased - as of Sprint 61 end 2017-05-22

### Added
- Angular Dialogs
  - Add the ability to customize JDBC Driver/Datasource defaults if not using standard options [(#1092)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1092)
- Compute
  - Containers: Allow to explicitly disable hawkular in containers [(#1205)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1205)
   - Physical Infrastructure
    - Add network data in physical server details table [(#1276)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1276)
    - Add parent relationship for physical server textual summary [(#1322)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1322)
    - Add support for displaying location LED state [(#1247)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1247)
    - Add support for displaying power state [(#1249)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1249)
    - Add support for displaying server health state [(#1250)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1250)
    - Display assets detail [(#1224)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1224)
    - Displayed Physical Server Hardware info [(#1272)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1272)
    - Add listnav for physical_server to host [(#1195)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1195)
    - Add groups for PhysicalServer#show page [(#1294)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1294)
    - Add feature buttons for physical server toolbar  [(#1299)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1299)

### Fixed
- Networks: Added to_i to port & end_port attributes [(#1318)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1318)
- Services
  - Added a note [(#1319)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1319)
  - Fixed to also copy 'Escalate Privilege' when Copying provisioning tab [(#1327)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1327)
  - Fix displaying tag from DialogFieldTagControl [(#1316)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1316)

## Unreleased - as of Sprint 60 end 2017-05-08

### Added
- Automation-Ansible: Add status to Repository Properties [(#1131)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1131)
- Compute-Physical Infrastructure
  - Physical server routing [(#1162)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1162)
  - Add images for physical servers healthstates. [(#1166)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1166)
  - Implements Physical Server Helper. [(#1281)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1281)
  - Refactor Textual Summary archtecture [(#1295)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1295)

### Changed
- TreeBuilderReportReport reduce queries [(#1253)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1253)

### Fixed
- Automation-Ansible
  - Enable Ansible refresh button after first successful refresh is complete [(#1141)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1141)
- Compute
  - Cloud
    - Fixed typo in flash message. [(#1307)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1307)
  - Containers
    - Do not fail if the method is not defined on the topology graph [(#1221)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1221)
    - Fix regressions in ad hoc page layout [(#1203)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1203)
    - Make add container provider button title consistent with the others [(#1254)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1254)
  - Infrastructure
    - Duplicate dom id compare advsearch [(#1269)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1269)
- Formatting-Styling
  - Fix checkbox alignment on button screens [(#1225)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1225)
- GTL
  - When rates are sorted/changed page do not update GTL if in getting node info for report [(#1260)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1260)
  - Default ordering for report data should be ASC not DESC [(#1220)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1220)
  - Add rendering of flash_array if present to report data (GTL) [(#1245)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1245)
  - Do not change parent for report data if active tree is present [(#1194)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1194)
  - Task managemenet gtl [(#1192)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1192)
  - Skip links for quadicons in PDFs [(#1060)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1060)
- Middleware: Ensure that error indicator appears on Hawkular tab [(#1172)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1172)
- Networks
  - Fix error on network topology when VM's power state is nil [(#1291)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1291)
- RBAC
  - Find correct klass for rbac check for `retirevms` [(#1136)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1136)
  - Use correct params for find_record_with_rbac in resize method [(#1139)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1139)
- Services
  - CatalogController - fix typo in default assignment [(#1264)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1264)
  - Re-initialize 'Remove Resources' drop down after copy button is pressed. [(#1246)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1246)
- Settings
  - Fix duplicate DOM id in textual summaries. [(#1184)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1184)
  - Fix some duplicate DOM ids under ops. [(#1181)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1181)
  - Settings/server: Move flash message one level up fixing duplicate DOM ids. [(#1182)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1182)
- Topology
  - Fix unknown errors for image-based icons in middleware topology [(#1289)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1289)
- Trees
  - Fix duplicate DOM id when saving advanced search. [(#1177)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1177)


## Unreleased - as of Sprint 59 end 2017-04-24

### Added
- Compute: Cloud: Angularize the VmCloud resize form [(#919)](https://github.com/ManageIQ/manageiq-ui-classic/pull/919)
- Merge jobs and tasks layouts (leave only 'My Tasks' and 'All Tasks' tabs) [(#242)](https://github.com/ManageIQ/manageiq-ui-classic/pull/242)

### Fixed
- Containers:
  - Hide resolved alerts [(#1070)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1070)
  - Move set tenant button to the right of selector [(#1118)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1118)
  - Set Ad hoc page layot to be without listnave [(#1121)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1121)
  - Fix layout regression [(#1125)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1125)
- Topology: Topology header - fix Enter in search [(#1005)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1005)

## Unreleased - as of Sprint 58 end 2017-04-10

### Added
- Middleware: Show cross linking containers links  [(#484)](https://github.com/ManageIQ/manageiq-ui-classic/pull/484)

### Fixed
- Fix misplaced ng-cloak in ems_datawarehouse [(#960)](https://github.com/ManageIQ/manageiq-ui-classic/pull/960)
- Default to a 0 evaluation frequency in dwh alerts [(#678)](https://github.com/ManageIQ/manageiq-ui-classic/pull/678)
- Storage: Enable attach/detach operations to storage manager [(#746)](https://github.com/ManageIQ/manageiq-ui-classic/pull/746)

### Fine-3

### Added
- Automation-Ansible: Added Verbosity drop down on both Provisioning & Retirement tabs [(#1493)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1493)
- Formatting-Styling
  - Make text area based item selector responsive [(#1376)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1376)
  - Update Policy Event Assignment styling [(#1543)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1543)

### Fixed
- Automation-Ansible
  - Credentials summary: don't display username & password twice [(#1068)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1068)
  - Display Ansible Tower Job Templates filters [(#1082)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1082)
  - Set gtl buttons toolbar for automation manager when refreshed from hash [(#1410)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1410)
  - Rollback any changes to Dialog object when validating dialog elements. [(#1445)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1445)
  - Change ng-show to ng-if in button group [(#1486)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1486)
  - Add IDs to ansible credential form selects [(#1487)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1487)
  - Add git protocol to URL for Ansible repo [(#1557)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1557)
  - Fixed parameters being passed in to rbac features check. [(#1567)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1567)  
  - Fix for Drop Down List Dialog does not keep default value for Integer type [(#1700)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1700)
- Cloud-Intelligence
  - Escape timeline JSON properly [(#1075)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1075)
  - Fix enabled Export button on Custom Reports Export [(#1142)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1142)
  - Add uid to report fields VM Chargeback Report [(#1208)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1208)
- Cloud-Intel-Reporting
  - Parse the column/field name correctly in reports [(#1170)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1170)
  - Custom Reports export - add missing action to the button [(#1427)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1427)
  - Fix spec to use correct status of miq_task (CI failure) [(#1481)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1481)
  - Allow to see saved reports after linked MiqTask deleted [(#1488)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1488)
  - Fix displaying report result [(#1650)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1650)
  - Don't x_node_set on a tree which doesn't exist [(#1657)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1657)
  - ReportController - replace_right_cell - don't rebuild trees which don't exist [(#1665)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1665)
- Compute
  - Cloud
    - Rename column header in Container Template screen [(#1147)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1147)
    - Key Pair (angular) - don't sparkleOff when waiting for task [(#1178)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1178)
    - Check :sort_by: :none to keep the field values in the order that they are inserted in the file. [(#1248)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1248)
    - Disable Web Console button when VM's platform is Windows [(#1282)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1282)
    - Add cloud tenant filtering for various network object forms [(#1343)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1343)
    - Ensure cloud tenant ID is read as string for cloud subnets [(#1406)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1406)
    - Redirect appropriately after cancel is pressed while provisioning instances [(#1472)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1472)
    - Fix flash messages on the Instance attach/detach cloud volume form [(#1514)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1514)
    - Fix formatting and localization of EMS task flash messages [(#1536)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1536)
  - Containers
    - Containers Dashboard: Show one square per node in realtime heatmaps [(#608)](https://github.com/ManageIQ/manageiq-ui-classic/pull/608)
    - Fixed alphabetical order in Labels table  [(#1053)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1053)
    - Add legend to ad hoc chart [(#1124)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1124)
    - Make redirects after actions the way user would expect [(#1130)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1130)
    - Make containers view navlist [(#1204)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1204)
    - Fix oVirt metrics DB name validation [(#1379)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1379)
    - Make selected items persistence [(#1451)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1451)
    - Fix topology max items feature [(#1453)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1453)
    - Fix empty settings error in containers topology [(#1507)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1507)
    - Display a warning for large amount of objects in topology view [(#1605)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1605)
  - Infrastructure
    - Fix Default tab error indicator for OpenStack Infra [(#1341)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1341)
    - Added missing Tag class to fix display of tags on Infra Topology. [(#1404)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1404)
    - Display product.name instead of ManageIQ in remote console titles [(#1450)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1450)
    - Fix Providers text and Cluster info in host listnav [(#1471)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1471)
    - Fix incorrect redirection after provider / host edit [(#1491)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1491)
    - Fixed titles and labels for Hosts & Clusters Openstack Providers [(#1560)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1560)
    - Fix VNC console connection to Windows VMs and Ctrl-Alt-Del button [(#1672)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1672)
- Configuration Management: Fix filters in config mgmt Configured systems [(#776)](https://github.com/ManageIQ/manageiq-ui-classic/pull/776)
- Console
  - Allow VMRC connection to a VMware provider accessed through IPv6 [(#1579)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1579)
- Control: Clickable labels in policy's event assignment screen [(#1511)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1511)
- Dashboard: Add flash message partial to ems_container/\_show_dashboard [(#1312)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1312)
- Formatting-Styling
  - Fix Replication tab ellipsis styling [(#1185)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1185)
  - Fix missing stylesheet extension [(#1332)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1332)
- Graphics: fix broken "vm_transform" toolbar icon [(#1633)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1633)
- GTL
  - Fixed alphabetical order in Labels table  [(#1053)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1053)
- Networks
  - Floating IP related crosslinks for load balancers [(#1232)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1232)
  - CloudSubnet: IP version not displayed [(#1515)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1515)
  - Enable the cancel button on the custom form button partial [(#1520)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1520)
  - Floating IPs: Fix edit form buttons [(#1582)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1582)
- Optimize: Delete duplicate flash message display in Optimize Planning page [(#1342)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1342)
- RBAC
  - Added RBAC check to the check_compliance method [(#1012)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1012)
  - Add RBAC for requesters in MiqRequest [(#1214)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1214)
- Services
  - Incorrect authentication_type being used [(#1157)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1157)
  - Display summary tags for the ansible playbook services [(#1297)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1297)
  - Save new dialog value & other UI issues fixed [(#1330)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1330)
  - Display all services with 'display' = true in the Active and Retired Services trees [(#1340)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1340)
  - Changed API call to pass in region number get list of repos/playbooks [(#1354)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1354)
  - Add Tag Information for Catalog Items [(#1357)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1357)
  - New dialog name validation added. [(#1361)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1361)
- Settings
  - Fix buttons enabling/disabling on Ops/Edit Group when changing the tabs [(#1196)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1196)
  - Fixed prompt for log collection by reorganizing button inheritance [(#1413)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1413)
  - Fixed condition in disabled? method [(#1428)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1428)
  - Fix reset button action for tenant tagging [(#1470)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1470)
- Storage
  - Redirect delete action to cloud volume controller [(#1331)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1331)
  - Add Create a snapshot of this volume to volume list [(#1388)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1388)
  - Display Adv search in Object Store Objects page [(#1455)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1455)
  - Enable to download AWS volumes snapshot summary [(#1457)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1457)
- Topology
  - Fix IE 11 & Edge styling issue in Topology legend [(#1155)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1155)
  - Connect clusterless hosts directly to the provider in infra topology [(#1156)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1156)
  - Indicate no results when searching [(#1277)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1277)
- Trees: Only Host under Cluster have no checkbox [(#1338)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1338)

# Fine-2

### Fixed
- Middleware: Add new fields to middleware Add JDBC Driver Dialog for XA JDBC Driver [(#1300)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1300)
- Ansible: Make device path mandatory for EBS attachments [(#1321)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1321)
- Compute
  - Cloud: Fix HTML5 Console in IE11 [(#1337)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1337)
  - Infrastructure
    - Changed if condition to rely on back-end method. [(#1351)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1351)
    - Add missing ownership routes for MiqTemplate [(#1352)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1352)
- RBAC: Need to gsub occurrences of {{ }} in the output [(#1369)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1369)
- Services: Fix ems cluster multilink [(#1374)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1374)

## Fine-1

### Added
- Ansible: UI for targeted Embedded Ansible refresh [(#1083)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1083)
- Automate:
  - Ansible: UI for Embedded Ansible Provider refresh [(#934)](https://github.com/ManageIQ/manageiq-ui-classic/pull/934)
  - Extended options in Ansible Repository textual summary [(#798)](https://github.com/ManageIQ/manageiq-ui-classic/pull/798)
  - Extended textual summary for ansible credentials [(#787)](https://github.com/ManageIQ/manageiq-ui-classic/pull/787)
  - Add repository CRUD [(#346)](https://github.com/ManageIQ/manageiq-ui-classic/pull/346)
  - UI changes needed for embedded ansible models [(#584)](https://github.com/ManageIQ/manageiq-ui-classic/pull/584)
  - Display the credentials for the embedded tower in the playbook catalog UI dropdowns [(#627)](https://github.com/ManageIQ/manageiq-ui-classic/pull/627)
- Compute
    - Cloud
      - Enable new cloud volume for provider [(#715)](https://github.com/ManageIQ/manageiq-ui-classic/pull/715)
      - Adjust styling of power state images [(#813)](https://github.com/ManageIQ/manageiq-ui-classic/pull/813)
      - Modify label_tag_mapping_add to accommodate scoped entity type. [(#666)](https://github.com/ManageIQ/manageiq-ui-classic/pull/666)
      - Add a type column to the list of images in the pre-prov flow [(#618)](https://github.com/ManageIQ/manageiq-ui-classic/pull/618)
      - Add cockpit button for cloud instance. [(#820)](https://github.com/ManageIQ/manageiq-ui-classic/pull/820)
      - Display AWS instance labels in the Summary screen [(#631)](https://github.com/ManageIQ/manageiq-ui-classic/pull/631)
      - Support operation `delete` on CloudObjectStoreContainer [(#420)](https://github.com/ManageIQ/manageiq-ui-classic/pull/420)
    - Containers
      - Adding SSO to External Logging link [(#550)](https://github.com/ManageIQ/manageiq-ui-classic/pull/550)
      - Add filter selections for the ad-hoc metrics page [(#735)](https://github.com/ManageIQ/manageiq-ui-classic/pull/735)
      - Tenant options instead of free text [(#690)](https://github.com/ManageIQ/manageiq-ui-classic/pull/690)
      - Add pagination to the ad-hoc page [(#683)](https://github.com/ManageIQ/manageiq-ui-classic/pull/683)
      - Dashboard: Show hourly and realtime trends [(#519)](https://github.com/ManageIQ/manageiq-ui-classic/pull/519)
      - Adding External Logging Link for Containers Providers [(#489)](https://github.com/ManageIQ/manageiq-ui-classic/pull/489)
      - Container SSA: warn if no smartproxy/state role [(#273)](https://github.com/ManageIQ/manageiq-ui-classic/pull/273)
      - Topology for Container Projects [(#120)](https://github.com/ManageIQ/manageiq-ui-classic/pull/120)
      - TLS verification & custom CA UI for oVirt and Container providers [(#450)](https://github.com/ManageIQ/manageiq-ui-classic/pull/450)
    - Infrastructure
      - Show vms in infra topology [(#564)](https://github.com/ManageIQ/manageiq-ui-classic/pull/564)
      - Physical infra pages [(#196)](https://github.com/ManageIQ/manageiq-ui-classic/pull/196)
      - Physical Infrastructure: Make Physical Infrastructure a prototype feature  [(#1045)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1045)
- Control: Add live search to the service template id dropdown for Run Ansible Playbook action [(#512)](https://github.com/ManageIQ/manageiq-ui-classic/pull/512)
- Graphics
  - Add icon for ansible credentials [(#525)](https://github.com/ManageIQ/manageiq-ui-classic/pull/525)
  - Textual Summaries - textual\_*\_ icon - support for fonticons decorators [(#603)](https://github.com/ManageIQ/manageiq-ui-classic/pull/603)
- Formatting/styling: Update dashboard widget styling [(#728)](https://github.com/ManageIQ/manageiq-ui-classic/pull/728)
- Menus: Adds Topology in the menu for Physical Infrastructure [(#862)](https://github.com/ManageIQ/manageiq-ui-classic/pull/862)
- Middleware
  - Add Smart Jdbc driver defaults [(#876)](https://github.com/ManageIQ/manageiq-ui-classic/pull/876)
  - For middleware UI only allow operations on mutable servers. [(#636)](https://github.com/ManageIQ/manageiq-ui-classic/pull/636)
  - Hawkular/add ssl support [(#460)](https://github.com/ManageIQ/manageiq-ui-classic/pull/460)
  - Enable Xa capability for Middleware  Datatsource options [(#149)](https://github.com/ManageIQ/manageiq-ui-classic/pull/149)
  - Crosslinked containers on middleware topology graph [(#1223)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1223)
- Services
  - Removed all dialog related settings from form & summary screen [(#786)](https://github.com/ManageIQ/manageiq-ui-classic/pull/786)
  - Changes to Credential drop down labels from plural to singular [(#734)](https://github.com/ManageIQ/manageiq-ui-classic/pull/734)
  - Added "Remove Resources" on Catalog Item summary Retirement tab [(#764)](https://github.com/ManageIQ/manageiq-ui-classic/pull/764)
  - Hiding Network Credentials on retirement tab on summary screen [(#763)](https://github.com/ManageIQ/manageiq-ui-classic/pull/763)
  - Changes to Ansible service summary screen. [(#756)](https://github.com/ManageIQ/manageiq-ui-classic/pull/756)
  - Hiding Network Credentials drop down from UI [(#757)](https://github.com/ManageIQ/manageiq-ui-classic/pull/757)
  - Added "Copy from Provisioning" button on Retirement tab. [(#732)](https://github.com/ManageIQ/manageiq-ui-classic/pull/732)
  - Use API call to populate cloud_types drop down [(#570)](https://github.com/ManageIQ/manageiq-ui-classic/pull/570)
  - Added Lifecycle box on Playbook Service summary screen [(#730)](https://github.com/ManageIQ/manageiq-ui-classic/pull/730)
  - Label changes on Remove Resources drop down [(#685)](https://github.com/ManageIQ/manageiq-ui-classic/pull/685)
  - Remove Playbook Service Templates from list of Available resources [(#613)](https://github.com/ManageIQ/manageiq-ui-classic/pull/613)
  - Add retired services node [(#632)](https://github.com/ManageIQ/manageiq-ui-classic/pull/632)
  - Added remove resources option in the form on Retirement tab [(#629)](https://github.com/ManageIQ/manageiq-ui-classic/pull/629)
  - Get list of Repositories using Embedded Provider [(#565)](https://github.com/ManageIQ/manageiq-ui-classic/pull/565)
- Settings: Add custom logo capability to the ‘About’ modal [(#566)](https://github.com/ManageIQ/manageiq-ui-classic/pull/566)
- Storage
  - Support operation `clear` on CloudObjectStoreContainer [(#498)](https://github.com/ManageIQ/manageiq-ui-classic/pull/498)
  - Allow advanced modifications of Amazon cloud volumes [(#676)](https://github.com/ManageIQ/manageiq-ui-classic/pull/676)
  - Allow cloud volume to provide list of supported VMs for attachment [(#601)](https://github.com/ManageIQ/manageiq-ui-classic/pull/601)
  - Support operation `delete` on CloudObjectStoreObject [(#497)](https://github.com/ManageIQ/manageiq-ui-classic/pull/497)
- UI for Ansible Tower Playbooks & Repositories [(#283)](https://github.com/ManageIQ/manageiq-ui-classic/pull/283)
- Ansible Playbook Control UI [(#399)](https://github.com/ManageIQ/manageiq-ui-classic/pull/399)
- Enable container start pages [(#380)](https://github.com/ManageIQ/manageiq-ui-classic/pull/380)
- Server group power ops ui [(#286)](https://github.com/ManageIQ/manageiq-ui-classic/pull/286)
- Angular Form with REST API calls for Playbook Service Template type. [(#262)](https://github.com/ManageIQ/manageiq-ui-classic/pull/262)
- Add checkbox for chargeback without C & U [(#366)](https://github.com/ManageIQ/manageiq-ui-classic/pull/366)
- Use task queue for update stack operation [(#373)](https://github.com/ManageIQ/manageiq-ui-classic/pull/373)
- Use task queue for VM actions [(#307)](https://github.com/ManageIQ/manageiq-ui-classic/pull/307)
- Add class decorator support [(#237)](https://github.com/ManageIQ/manageiq-ui-classic/pull/237)
- Added live search to drop downs for services [(#462)](https://github.com/ManageIQ/manageiq-ui-classic/pull/462)
- Updated summary screen to show details of Playbook type template [(#456)](https://github.com/ManageIQ/manageiq-ui-classic/pull/456)
- UI for Ansible Credentials [(#452)](https://github.com/ManageIQ/manageiq-ui-classic/pull/452)
- Add subscription backlog to replication tab [(#443)](https://github.com/ManageIQ/manageiq-ui-classic/pull/443)
- Use table name when generating SQL to filter tasks on `Tasks` screen  [(#344)](https://github.com/ManageIQ/manageiq-ui-classic/pull/344)
- Move the Ansible Tower UI to the Automation tab [(#170)](https://github.com/ManageIQ/manageiq-ui-classic/pull/170)
- Allow reselection of node for Workload tree [(#300)](https://github.com/ManageIQ/manageiq-ui-classic/pull/300)
- Add service_action to resource_action ae_attributes. [(#297)](https://github.com/ManageIQ/manageiq-ui-classic/pull/297)
- Add icon for node alerts [(#277)](https://github.com/ManageIQ/manageiq-ui-classic/pull/277)
- Add Live Migrate actions to the task queue. [(#208)](https://github.com/ManageIQ/manageiq-ui-classic/pull/208)
- Added changes to show Catalog Item type [(#165)](https://github.com/ManageIQ/manageiq-ui-classic/pull/165)
- UI for server group deployments [(#23)](https://github.com/ManageIQ/manageiq-ui-classic/pull/23)
- Display a more informative message on single datasource deletion. [(#353)](https://github.com/ManageIQ/manageiq-ui-classic/pull/353)
- Middleware: provide select JDBC driver tab to more easily input Drivers loaded in servers ([#82](https://github.com/ManageIQ/manageiq-ui-classic/pull/82))
- Replace AnsibleTower::ConfigurationManager with AutomationManager references in the Ui ([#248](https://github.com/ManageIQ/manageiq-ui-classic/pull/248))
- Add volume snapshot summary to block storage manager ([#231](https://github.com/ManageIQ/manageiq-ui-classic/pull/231))
- Add delete functionality for generic object UI ([#180](https://github.com/ManageIQ/manageiq-ui-classic/pull/180))
- Add Dashboard settings to General ([#141](https://github.com/ManageIQ/manageiq-ui-classic/pull/141))
- Add assets for EC2 block and storage managers ([#133](https://github.com/ManageIQ/manageiq-ui-classic/pull/133))
- Introduce Vm/Chargeback tab [ui-part] ([#270](https://github.com/ManageIQ/manageiq-ui-classic/pull/270))
- Rename Automate to Automation in UI ([#150](https://github.com/ManageIQ/manageiq-ui-classic/pull/150))
- Use decorators for certain TreeNode icons/images ([#118](https://github.com/ManageIQ/manageiq-ui-classic/pull/118))
- Add edit functionality for generic object UI ([#72](https://github.com/ManageIQ/manageiq-ui-classic/pull/72))
- Automatic detection of hawkular endpoint ([#37](https://github.com/ManageIQ/manageiq-ui-classic/pull/37))
- Add alerts on container nodes in control explorer ([#31](https://github.com/ManageIQ/manageiq-ui-classic/pull/31))
- Ad hoc metrics for OPS Remove tooltips and add spinners ([#27](https://github.com/ManageIQ/manageiq-ui-classic/pull/27)
- UI for add/remove interface on network router ([#60](https://github.com/ManageIQ/manageiq-ui-classic/pull/60))

### Changed
- Charts
    - Remove Y bottom padding for charts [(#741)](https://github.com/ManageIQ/manageiq-ui-classic/pull/741)
    - Change graph options calls [(#710)](https://github.com/ManageIQ/manageiq-ui-classic/pull/710)
- Compute
  - Move security protocol [(#759)](https://github.com/ManageIQ/manageiq-ui-classic/pull/759)
  - Update 'Project' to 'Project ID' when adding GCE Provider [(#747)](https://github.com/ManageIQ/manageiq-ui-classic/pull/747)
  - Enable Web Console button when VM power state is 'on' [(#695)](https://github.com/ManageIQ/manageiq-ui-classic/pull/695)
- Trees: Reorganize the logic in lookup_attrs for AutomateSimulationTree [(#723)](https://github.com/ManageIQ/manageiq-ui-classic/pull/723)
- Services
  - Fixed class names to get objects using EmbeddedAnsible tower. [(#659)](https://github.com/ManageIQ/manageiq-ui-classic/pull/659)
  - Changed all drop downs in form to sort by name in ascending order. [(#597)](https://github.com/ManageIQ/manageiq-ui-classic/pull/597)
- Storage
  - Extend form for creating new cloud volumes [(#517)](https://github.com/ManageIQ/manageiq-ui-classic/pull/517)
  - Allow any EMS to create cloud volume [(#600)](https://github.com/ManageIQ/manageiq-ui-classic/pull/600)
- Update labels for playbook catalog  action [(#424)](https://github.com/ManageIQ/manageiq-ui-classic/pull/424)
- Removed Arbitration Profiles from classic UI [(#426)](https://github.com/ManageIQ/manageiq-ui-classic/pull/426)
- update/replacePartials - carp when element doesn't exist [(#422)](https://github.com/ManageIQ/manageiq-ui-classic/pull/422)
- Disable VNC Console for VMs hosted on ESXi 6.5 or greater [(#355)](https://github.com/ManageIQ/manageiq-ui-classic/pull/355)
- Skip protect_from_forgery for #authenticate [(#451)](https://github.com/ManageIQ/manageiq-ui-classic/pull/451)
- Make sure bucket duration is not less the 20 minutes [(#385)](https://github.com/ManageIQ/manageiq-ui-classic/pull/385)
- Unified the layout for VNC/SPICE remote consoles [(#186)](https://github.com/ManageIQ/manageiq-ui-classic/pull/186)
- Update ui-components to 0.0.12 (dialog editor) [(#288)](https://github.com/ManageIQ/manageiq-ui-classic/pull/288)
- Enable 'Provision VMs' button in Datastores and Clusters [(#298)](https://github.com/ManageIQ/manageiq-ui-classic/pull/298)
- Don't invoke get_tagdata() for non-taggable objects [(#348)](https://github.com/ManageIQ/manageiq-ui-classic/pull/348)
- Limit number of objects on topology views ([#95](https://github.com/ManageIQ/manageiq-ui-classic/pull/95))
- Add latest VMRC API version ([#184](https://github.com/ManageIQ/manageiq-ui-classic/pull/184))
- Remove instance retire class from summary view ([#143](https://github.com/ManageIQ/manageiq-ui-classic/pull/143))
- Sort custom attributes by attribute name ([#228](https://github.com/ManageIQ/manageiq-ui-classic/pull/228))
- Reset selected snapshot in session when deleting the snapshot ([#183](https://github.com/ManageIQ/manageiq-ui-classic/pull/183))
- Clean up TreeNode:: title and tooltip evaluation escaping and gettext ([#74](https://github.com/ManageIQ/manageiq-ui-classic/pull/74))
- Ops_rbac - group detail - don't render trees that are not visible ([#68](https://github.com/ManageIQ/manageiq-ui-classic/pull/68))
- Resolve symlinks before evaluating spec/manageiq/Gemfile ([#32](https://github.com/ManageIQ/manageiq-ui-classic/pull/32))
- Improve UX for attaching Openstack cloud volumes to instances ([#110](https://github.com/ManageIQ/manageiq-ui-classic/pull/110))
- Use ViewHelper instead of <tags> in policy simulation results tree ([#77](https://github.com/ManageIQ/manageiq-ui-classic/pull/77))
- Merge all timeline accordions under a single tree ([#63](https://github.com/ManageIQ/manageiq-ui-classic/pull/64))

### Removed
- Remove VMware MKS consoles and the old VMRC plugin support [(#979)](https://github.com/ManageIQ/manageiq-ui-classic/pull/979)

### Fixed
- Angular Dialogs
  - $scope.$on('destroy') should be '$destroy' [(#908)](https://github.com/ManageIQ/manageiq-ui-classic/pull/908)
  - Fix API error object code and display a flash error message [(#805)](https://github.com/ManageIQ/manageiq-ui-classic/pull/805)
- Ansible
  - Ansible refresh button: correctly send miq_grid_checks [(#1176)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1176)
  - Advanced search bar ansible tower fix [(#1209)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1209)
- Ansible Tower
  - Better password management in Ansible Credential Form [(#1227)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1227)
  - Use properties in the model when retrieving the ansible repo for editing [(#1230)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1230)
  - Moved menus under Automation maintab around [(#921)](https://github.com/ManageIQ/manageiq-ui-classic/pull/921)
  - Use manager_resource only to create Repository [(#899)](https://github.com/ManageIQ/manageiq-ui-classic/pull/899)
  - Disable embedded Ansible buttons if no embedded Ansible Provider found [(#891)](https://github.com/ManageIQ/manageiq-ui-classic/pull/891)
  - Fix url for Ansible Credentials in tile & grid views [(#945)](https://github.com/ManageIQ/manageiq-ui-classic/pull/945)
  - PDF download for job template summary [(#523)](https://github.com/ManageIQ/manageiq-ui-classic/pull/523)
- API (js) - handle non-2\*\* (and 1**) responses as errors [(#783)](https://github.com/ManageIQ/manageiq-ui-classic/pull/783)
- Automate
  - Clear out all dialog resources before adding/validating. [(#1306)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1306)
  - Fix duplicate DOM IDs and broken flash messages in miq_ae_class_controller  [(#801)](https://github.com/ManageIQ/manageiq-ui-classic/pull/801)
  - Ansible: Fix password placeholders in credential summary [(#797)](https://github.com/ManageIQ/manageiq-ui-classic/pull/797)
  - Fixes simulate message passing [(#742)](https://github.com/ManageIQ/manageiq-ui-classic/pull/742)
  - Fix for TagControl issues after previous BZ1428133 fix [(#694)](https://github.com/ManageIQ/manageiq-ui-classic/pull/694)
  - Allow access to embedded ansible anytime a feature is allowed [(#640)](https://github.com/ManageIQ/manageiq-ui-classic/pull/640)
  - Decorator update for inventory and credentials [(#538)](https://github.com/ManageIQ/manageiq-ui-classic/pull/538)
  - Fix for unable to import service dialog from yaml  [(#616)](https://github.com/ManageIQ/manageiq-ui-classic/pull/616)
- Charts
  - Corrected loading record id by selected node [(#671)](https://github.com/ManageIQ/manageiq-ui-classic/pull/671)
  - Fix failing chart specs [(#705)](https://github.com/ManageIQ/manageiq-ui-classic/pull/705)
- Compute
  - Fix table headers misalignment while Provisioning [(#802)](https://github.com/ManageIQ/manageiq-ui-classic/pull/802)
  - Fix all users of CredentialsController to provide vm-scope [(#726)](https://github.com/ManageIQ/manageiq-ui-classic/pull/726)
  - Sanitize hawkular error messages in ad-hoc page [(#767)](https://github.com/ManageIQ/manageiq-ui-classic/pull/767)
  - Verify button haml should always be called via credentials haml [(#713)](https://github.com/ManageIQ/manageiq-ui-classic/pull/713)
  - Fix double rendered icon on Hosts comparison delete column button [(#773)](https://github.com/ManageIQ/manageiq-ui-classic/pull/773)
  - Added missing main_div - fixed functions on hosts comparison [(#775)](https://github.com/ManageIQ/manageiq-ui-classic/pull/775)
  - Display Cluster Resource Pool [(#785)](https://github.com/ManageIQ/manageiq-ui-classic/pull/785)
  - Cloud
    - Fix VmCloud Resize/Reconfigure form bugs [(#1163)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1163)
    - Removed incorrect class from compare button. [(#1293)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1293)
    - Verify VM power status is not Nil when displaying Cloud Topology [(#1278)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1278)
    - Removed Arbitration Profiles related toolbar buttons. [(#968)](https://github.com/ManageIQ/manageiq-ui-classic/pull/968)
    - Add missing routes for some Network resources [(#903)](https://github.com/ManageIQ/manageiq-ui-classic/pull/903)
    - Adds floating_ip to visibility [(#689)](https://github.com/ManageIQ/manageiq-ui-classic/pull/689)
    - Add a 'Labels' prefix to custom attribute column in reports [(#733)](https://github.com/ManageIQ/manageiq-ui-classic/pull/733)
  - Containers
    - Add UI support for Pod to PV relationship [(#682)](https://github.com/ManageIQ/manageiq-ui-classic/pull/682)
    - Fix tags format [(#1180)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1180)
    - Catch SSLError too when adding a provider [(#972)](https://github.com/ManageIQ/manageiq-ui-classic/pull/972)
    - Fix ad-hoc page css for new Patternfly version [(#826)](https://github.com/ManageIQ/manageiq-ui-classic/pull/826)
    - Fix ad-hoc page title regression [(#901)](https://github.com/ManageIQ/manageiq-ui-classic/pull/901)
    - Container show fixes [(#819)](https://github.com/ManageIQ/manageiq-ui-classic/pull/819)
    - Enable configuration button for container images [(#917)](https://github.com/ManageIQ/manageiq-ui-classic/pull/917)
    - Container Volumes should honour tag visibility [(#808)](https://github.com/ManageIQ/manageiq-ui-classic/pull/808)
    - Fix Container Provider link to Capacity & Utilization [(#766)](https://github.com/ManageIQ/manageiq-ui-classic/pull/766)
    - Container TLS fixes [(#670)](https://github.com/ManageIQ/manageiq-ui-classic/pull/670)
    - Fix Persistent Volume link to ems_container [(#692)](https://github.com/ManageIQ/manageiq-ui-classic/pull/692)
    - Fix multilabel tables for Container entities [(#748)](https://github.com/ManageIQ/manageiq-ui-classic/pull/748)
    - Fix overlapping in Container Image summary screen [(#272)](https://github.com/ManageIQ/manageiq-ui-classic/pull/272)
  - Infrastructure
    - Fix ownership link for infrastructure templates [(#1174)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1174)
    - Fixed multiple 'VM Console' buttons appearing on VMs [(#949)](https://github.com/ManageIQ/manageiq-ui-classic/pull/949)
    - Datastore selection flash message fix [(#559)](https://github.com/ManageIQ/manageiq-ui-classic/pull/559)
    - Create snapshot with no active snapshot [(#598)](https://github.com/ManageIQ/manageiq-ui-classic/pull/598)
  - Physical Infrastructure: Fix Topology graph for Physical Infra Providers [(#656)](https://github.com/ManageIQ/manageiq-ui-classic/pull/656)
- Formatting/Styling
  - Fix topology view styling issues [(#926)](https://github.com/ManageIQ/manageiq-ui-classic/pull/926)
  - Crop the powerstate svg in quadicons using border-radius [(#778)](https://github.com/ManageIQ/manageiq-ui-classic/pull/778)
  - Fix dashboard styling [(#709)](https://github.com/ManageIQ/manageiq-ui-classic/pull/709)
- Graphics
  - Change summary icon on infra providers screen [(#985)](https://github.com/ManageIQ/manageiq-ui-classic/pull/985)
  - Fix Centos image dimensions [(#743)](https://github.com/ManageIQ/manageiq-ui-classic/pull/743)
  - Add missing “product-element” font icon [(#731)](https://github.com/ManageIQ/manageiq-ui-classic/pull/731)
- GTL: Fixed quadicon text links. [(#1188)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1188)
- Menus
  - Menu highlighting - use menu_section instead of @layout when possible [(#871)](https://github.com/ManageIQ/manageiq-ui-classic/pull/871)
  - Adjust custom menu load path to match split repositories. [(#832)](https://github.com/ManageIQ/manageiq-ui-classic/pull/832)
- Middleware
  - Correct typo in Postgres JDBC DriverName [(#807)](https://github.com/ManageIQ/manageiq-ui-classic/pull/807)
  - Fixing the navigation logic and Angular controllers for Middleware provider [(#708)](https://github.com/ManageIQ/manageiq-ui-classic/pull/708)
  - Fix middleware display methods methods [(#687)](https://github.com/ManageIQ/manageiq-ui-classic/pull/687)
  - Use the proper EAP icon for EAP 6.4 instead of using default icon [(#537)](https://github.com/ManageIQ/manageiq-ui-classic/pull/537)
- Networks: Show also non vpc vms in network topology [(#510)](https://github.com/ManageIQ/manageiq-ui-classic/pull/510)
- RBAC
  - Fix RBAC for foreman [(#965)](https://github.com/ManageIQ/manageiq-ui-classic/pull/965)
  - Fix RBAC for floating ips [(#963)](https://github.com/ManageIQ/manageiq-ui-classic/pull/963)
  - Fix the missed `find_checked_ids_with_rbac` [(#951)](https://github.com/ManageIQ/manageiq-ui-classic/pull/951)
  - Add RBAC check to ops controllers method [(#939)](https://github.com/ManageIQ/manageiq-ui-classic/pull/939)
  - Fix retirevms and vm_button_operations to account for  it being called for objects other than VMOrTemplate [(#890)](https://github.com/ManageIQ/manageiq-ui-classic/pull/890)
  - Corrected RBAC checks for checked items in ops controller [(#900)](https://github.com/ManageIQ/manageiq-ui-classic/pull/900)
  - Added RBAC check in catalog controller [(#887)](https://github.com/ManageIQ/manageiq-ui-classic/pull/887)
  - Add RBAC for users and role in widgets [(#888)](https://github.com/ManageIQ/manageiq-ui-classic/pull/888)
  - Add RBAC check to process_managers. [(#848)](https://github.com/ManageIQ/manageiq-ui-classic/pull/848)
  - Add RBAC checking to process_elements. [(#847)](https://github.com/ManageIQ/manageiq-ui-classic/pull/847)
  - RBAC checking in ci_processing [(#852)](https://github.com/ManageIQ/manageiq-ui-classic/pull/852)
  - Check selected Cloud Volumes for RBAC [(#770)](https://github.com/ManageIQ/manageiq-ui-classic/pull/770)
  - Replace the missed `find_by_id_filter` [(#857)](https://github.com/ManageIQ/manageiq-ui-classic/pull/857)
  - Check selected Service Catalog Item for RBAC [(#779)](https://github.com/ManageIQ/manageiq-ui-classic/pull/779)
  - Added RBAC check to finding checked items in Ops RBAC controller [(#915)](https://github.com/ManageIQ/manageiq-ui-classic/pull/915)
- Services
  - Show additional fields for dynamic fields [(#1199)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1199)
  - Added "Escalate Privilege" checkbox [(#1207)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1207)
  - Show VMware credential in service provisioning summary [(#1160)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1160)
  - Fix for Service Catalogs: Dialogs are hanging and keeps buffering [(#1197)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1197)
  - Check whether form is pristine after deleting extra var during edit [(#1146)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1146)
  - Removed decodeURI call. [(#1167)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1167)
  - Add VMWare vApp type to the Create Orchestration Template type list [(#1201)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1201)
  - Send extra_vars & hosts values only when retirement playbook is selected [(#1210)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1210)
  - Change the title for the playbook catalog item radio button to 'Run on the target of the Policy Event' [(#914)](https://github.com/ManageIQ/manageiq-ui-classic/pull/914)
  - Changed stdout format to be html [(#948)](https://github.com/ManageIQ/manageiq-ui-classic/pull/948)
  - Made changes to code to only access name if record exists. [(#946)](https://github.com/ManageIQ/manageiq-ui-classic/pull/946)
  - Reset value of remove_resources after Repository value is changed. [(#928)](https://github.com/ManageIQ/manageiq-ui-classic/pull/928)
  - Added force_encoding to display contents of stdout correctly on screen [(#894)](https://github.com/ManageIQ/manageiq-ui-classic/pull/894)
  - Reset dialog options [(#874)](https://github.com/ManageIQ/manageiq-ui-classic/pull/874)
  - Fixed variable name to display value of extra_vars on Retirement tab [(#875)](https://github.com/ManageIQ/manageiq-ui-classic/pull/875)
  - Fixes for editing a playbook service template  [(#761)](https://github.com/ManageIQ/manageiq-ui-classic/pull/761)
  - Fixes tag control multiselect [(#729)](https://github.com/ManageIQ/manageiq-ui-classic/pull/729)
  - Fixed checks around retirement dialog values. [(#768)](https://github.com/ManageIQ/manageiq-ui-classic/pull/768)
  - Fixed undefined method \`each' for nil:NilClass error on retirement tab [(#762)](https://github.com/ManageIQ/manageiq-ui-classic/pull/762)
  - Fixed some issues introduced with retirement remove resources option [(#697)](https://github.com/ManageIQ/manageiq-ui-classic/pull/697)
  - Fixed 'Catalog' should not be a required field [(#514)](https://github.com/ManageIQ/manageiq-ui-classic/pull/514)
  - Fixed Error handling of REST API calls. [(#490)](https://github.com/ManageIQ/manageiq-ui-classic/pull/490)
- Storage
  - Fix the storage manager id for cloud volume views [(#1302)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1302)
  - Fix volume attach/detach flash messages [(#745)](https://github.com/ManageIQ/manageiq-ui-classic/pull/745)
- Textual Summaries
  - Corrected class for items with link in textual summary [(#701)](https://github.com/ManageIQ/manageiq-ui-classic/pull/701)
  - Db summary textual [(#806)](https://github.com/ManageIQ/manageiq-ui-classic/pull/806)
  - TextualMultilabel: fix additional_table_class. [(#609)](https://github.com/ManageIQ/manageiq-ui-classic/pull/609)
  - Container node condition displayed with multilabel [(#541)](https://github.com/ManageIQ/manageiq-ui-classic/pull/541)
- Trees
  - Add some missing icons into automate simulation results tree [(#1153)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1153)
  - Fix actions' icons of policy events [(#754)](https://github.com/ManageIQ/manageiq-ui-classic/pull/754)
  - Corrected custom button sorting [(#711)](https://github.com/ManageIQ/manageiq-ui-classic/pull/711)
  - Add default tab for first selected group after login [(#680)](https://github.com/ManageIQ/manageiq-ui-classic/pull/680)
- UI
  - Fix the displaying of the flash message(s) in policy list [(#628)](https://github.com/ManageIQ/manageiq-ui-classic/pull/628)
  - Fix error when creating filter in Networks page [(#494)](https://github.com/ManageIQ/manageiq-ui-classic/pull/494)
- Fix Add Datasource via existing driver Issue [(#941)](https://github.com/ManageIQ/manageiq-ui-classic/pull/941)
- Custom buttons for list views [(#796)](https://github.com/ManageIQ/manageiq-ui-classic/pull/796)
- Fix links to parent provider from Job summary page [(#1127)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1127)
- Spec for url sorting in the automation providers list [(#828)](https://github.com/ManageIQ/manageiq-ui-classic/pull/828)
- Fixed quadicon link for automation providers [(#840)](https://github.com/ManageIQ/manageiq-ui-classic/pull/840)
- $q all promises and resolve them in the end [(#860)](https://github.com/ManageIQ/manageiq-ui-classic/pull/860)
- Fix textual provider svg and controller for ansible job [(#1102)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1102)
- Add flash messages partial view to the edit form of chargeback rates [(#1076)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1076)
- Use textarea for ssh key in Machine Credentials [(#976)](https://github.com/ManageIQ/manageiq-ui-classic/pull/976)
- Fix wrong validation error [(#1126)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1126)
- Remove VMware MKS consoles and the old VMRC plugin support [(#979)](https://github.com/ManageIQ/manageiq-ui-classic/pull/979)
- Zero the toolbar count when asked [(#1058)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1058)
- Fix wrong selection in Hosts/Nodes & Clusters tree [(#1112)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1112)
- Do not store openshift env in the controller use lookup helper instead [(#1077)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1077)
- Use function getBack in .then instead of result of that function [(#990)](https://github.com/ManageIQ/manageiq-ui-classic/pull/990)
- Include helper methods to make them accessible from views. [(#1044)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1044)
- Fix AvailabilityZone broken by GenericShow refactoring. [(#1080)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1080)
- Fix 'Save' button state in Edit Management Engine Relationship for VM/Instance [(#1055)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1055)
- Order Methods displayed under Automate Class [(#1003)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1003)
- Fix Openstack Services textual helper [(#1004)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1004)
- Fixed the mixin method cancel_action to display flash messages [(#1145)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1145)
- Add hint to check Hawkular when error originates from the Hawkular cl… [(#1018)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1018)
- fix cockpit button [(#1021)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1021)
- Move metrics scss require to application.css [(#1062)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1062)
- AnsibleCredentials - getCredentialFormData - wait for request before touching credential_options [(#1017)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1017)
- fix topology project icon [(#1013)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1013)
- Do not enable disabled button when items are selected [(#1031)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1031)
- Storage removal [(#993)](https://github.com/ManageIQ/manageiq-ui-classic/pull/993)
- Display paging controls on PXE/Customization Templates list [(#1135)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1135)
- Fix ems refresh from Dashboard view (includes RBAC) [(#983)](https://github.com/ManageIQ/manageiq-ui-classic/pull/983)
- Fix the controller and svg in textual provider for Ansible Tower Jobs [(#1029)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1029)
- Display missing HostEsx nodes on infra topology screens [(#994)](https://github.com/ManageIQ/manageiq-ui-classic/pull/994)
- Fix policy delete/copy buttons [(#1048)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1048)
- Add control that id is not nil otherwise set it to new [(#811)](https://github.com/ManageIQ/manageiq-ui-classic/pull/811)
- Fix for inability to edit/add service dialog imported from CF 4.0 to 4.2 [(#1042)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1042)
- Show the display value for the dropdown in the automation dialog [(#1006)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1006)
- Make Physical Infrastructure a prototype feature [Depends on core/14784] [(#1045)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1045)
- Pluralize report title in txt/csv/pdf reports [(#995)](https://github.com/ManageIQ/manageiq-ui-classic/pull/995)
- Fix calendar position on C & U gap collection tab [(#1084)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1084)
- Also post check tree nodes top-to-bottom when required [(#1057)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1057)
- Correct disk table styling [(#1100)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1100)
- Don't have embedded ansible refresh button always enabled [(#1059)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1059)
- Disable CRUD for Network provider elements for non-OpenStack providers [(#1007)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1007)
- Fix Group/Role name links on User Details page [(#655)](https://github.com/ManageIQ/manageiq-ui-classic/pull/655)
- Explicitly set the @record in ops controller on diagnostics screens [(#1106)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1106)
- Change error message flash of existing label to more informative [(#1123)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1123)
- Replaces default icons for “catalog” and “catalog items” [(#1024)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1024)
- Fix typo that caused win32 services icon to disappear [(#1063)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1063)
- UI for targeted Embedded Ansible refresh [(#1083)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1083)
- Set @showlinks to true in tagging_edit to set correct quadicon links [(#1041)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1041)
- Fix server state incorrectly reported [(#987)](https://github.com/ManageIQ/manageiq-ui-classic/pull/987)
- fix network router config options [(#1025)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1025)
- Rename button IDs according the controller_name(s) in which are used [(#1020)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1020)
- No find_record_with_rbac for New button [(#989)](https://github.com/ManageIQ/manageiq-ui-classic/pull/989)
- Added RBAC check for assigning policies [(#1014)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1014)
- Add RBAC for deleting Cloud subnets [(#1108)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1108)
- Fix quadicons under service catalogs [(#971)](https://github.com/ManageIQ/manageiq-ui-classic/pull/971)
- Change typ to 'service' for Service/Requests page [(#977)](https://github.com/ManageIQ/manageiq-ui-classic/pull/977)
- Display error message correctly that is returned from model. [(#1115)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1115)
- Fix storage_manager_id when adding a new cloud volume [(#1061)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1061)
- Hide back button on provider dashboard screens [(#1040)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1040)
- Removed unnecessary escaping from assigned server role treenodes [(#1138)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1138)
- UI changes to support value of extra vars as nested hash [(#1144)](https://github.com/ManageIQ/manageiq-ui-classic/pull/1144)
- Make cascading auto-refresh behavior more consistent with how it was previously [(#433)](https://github.com/ManageIQ/manageiq-ui-classic/pull/433)
- Catalog Items - show all items regardless of display=true [(#446)](https://github.com/ManageIQ/manageiq-ui-classic/pull/446)
- Fix grouping in CU charts [(#335)](https://github.com/ManageIQ/manageiq-ui-classic/pull/335)
- Change ordering of Saved Chargeback reports [(#454)](https://github.com/ManageIQ/manageiq-ui-classic/pull/454)
- Fix assets names for Amazon storage managers [(#428)](https://github.com/ManageIQ/manageiq-ui-classic/pull/428)
- Fix adding Kubernetes provider [(#314)](https://github.com/ManageIQ/manageiq-ui-classic/pull/314)
- Dont allow to edit the name of Default rate for container images [(#269)](https://github.com/ManageIQ/manageiq-ui-classic/pull/269)
- Fix Snapshot revert [(#411)](https://github.com/ManageIQ/manageiq-ui-classic/pull/411)
- Fix to render pagination and listnav on list view. [(#436)](https://github.com/ManageIQ/manageiq-ui-classic/pull/436)
- Revert fix for BZ 1396068 as it breaks VMware [(#409)](https://github.com/ManageIQ/manageiq-ui-classic/pull/409)
- Display nested Resource Pools in summary page [(#255)](https://github.com/ManageIQ/manageiq-ui-classic/pull/255)
- Remove disabling of 'instance_retire' button [(#453)](https://github.com/ManageIQ/manageiq-ui-classic/pull/453)
- Allow to remove super administrator user [(#416)](https://github.com/ManageIQ/manageiq-ui-classic/pull/416)
- Fix creation of trees for new group [(#379)](https://github.com/ManageIQ/manageiq-ui-classic/pull/379)
- Show filter with list of users on All Jobs and All UI Task screens [(#435)](https://github.com/ManageIQ/manageiq-ui-classic/pull/435)
- Fix view multiple graphs [(#403)](https://github.com/ManageIQ/manageiq-ui-classic/pull/403)
- Fix image paths in ImportExportHelper. [(#397)](https://github.com/ManageIQ/manageiq-ui-classic/pull/397)
- Add specs for rendering Alert detail screen and pressing buttons [(#396)](https://github.com/ManageIQ/manageiq-ui-classic/pull/396)
- Make buttons visible only in list of chargeback saved reports [(#394)](https://github.com/ManageIQ/manageiq-ui-classic/pull/394)
- Update spice-html5-bower to 1.6.3 fixing an extra GET .../null request [(#370)](https://github.com/ManageIQ/manageiq-ui-classic/pull/370)
- Fix broken Automate icons [(#351)](https://github.com/ManageIQ/manageiq-ui-classic/pull/351)
- Listnav Quad power state styling fix [(#439)](https://github.com/ManageIQ/manageiq-ui-classic/pull/439)
- Removed duplicate security group listing in cloud tenant table [(#457)](https://github.com/ManageIQ/manageiq-ui-classic/pull/457)
- Added alt-text to Advanced Search buttons [(#367)](https://github.com/ManageIQ/manageiq-ui-classic/pull/367)
- Correct inconsistent provider input field lengths [(#406)](https://github.com/ManageIQ/manageiq-ui-classic/pull/406)
- Display Catalog Item form buttons [(#432)](https://github.com/ManageIQ/manageiq-ui-classic/pull/432)
- Fix VM quadicon links in Services [(#372)](https://github.com/ManageIQ/manageiq-ui-classic/pull/372)
- Fix incorrect localization in instance methods across button classes [(#429)](https://github.com/ManageIQ/manageiq-ui-classic/pull/429)
- Fix retrieval of `device_path` from the attach form [(#464)](https://github.com/ManageIQ/manageiq-ui-classic/pull/464)
- Fix units formating for grouped charts [(#382)](https://github.com/ManageIQ/manageiq-ui-classic/pull/382)
- Make chart loading more error resistant. [(#465)](https://github.com/ManageIQ/manageiq-ui-classic/pull/465)
- Fix an error when cancelling from edit subnet screen [(#501)](https://github.com/ManageIQ/manageiq-ui-classic/pull/501)
- Cascading Auto Refresh for dialog fields [(#264)](https://github.com/ManageIQ/manageiq-ui-classic/pull/264)
- Add list of roles to rbac [(#271)](https://github.com/ManageIQ/manageiq-ui-classic/pull/271)
- Fix assigning roles in group form [(#296)](https://github.com/ManageIQ/manageiq-ui-classic/pull/296)
- Fix search box display for Configuration management providers [(#295)](https://github.com/ManageIQ/manageiq-ui-classic/pull/295)
- Use correct route to derive unfilled hawkular hostname [(#265)](https://github.com/ManageIQ/manageiq-ui-classic/pull/265)
- Fix "Provider Conditions" title in tree builder conditions [(#268)](https://github.com/ManageIQ/manageiq-ui-classic/pull/268)
- Fix typo in class name [(#334)](https://github.com/ManageIQ/manageiq-ui-classic/pull/334)
- Fixed DOM element names for Utilization & Bottleneck tree select [(#324)](https://github.com/ManageIQ/manageiq-ui-classic/pull/324)
- Fix buttons AND OR NOT REMOVE in exp editor [(#258)](https://github.com/ManageIQ/manageiq-ui-classic/pull/258)
- Topology: Fix second search [(#313)](https://github.com/ManageIQ/manageiq-ui-classic/pull/313)
- Network Provider timelines button fix. [(#316)](https://github.com/ManageIQ/manageiq-ui-classic/pull/316)
- Update the model for the ConfiguredSystems displayed in the Configuration managers Ui [(#358)](https://github.com/ManageIQ/manageiq-ui-classic/pull/358)
- AutomationManagerController & ProviderForemanController - unify model_to_type_name fixing toolbars [(#350)](https://github.com/ManageIQ/manageiq-ui-classic/pull/350)
- Fix race condition in container_live_dashboard_controlle controller [(#362)](https://github.com/ManageIQ/manageiq-ui-classic/pull/362)
- Fix check_box_tag parameters for snap_memory ([#217](https://github.com/ManageIQ/manageiq-ui-classic/pull/217))
rhv: removed the option to migrate the VMs outside of the cluster. ([#207](https://github.com/ManageIQ/manageiq-ui-classic/pull/207))
- Fix valid_tenant check in ops. ([#203](https://github.com/ManageIQ/manageiq-ui-classic/pull/203))
- Tenant admin should not be able to create groups in other tenants. ([#151](https://github.com/ManageIQ/manageiq-ui-classic/pull/151))
- Fix button when adding a filter in Cloud Providers ([#142](https://github.com/ManageIQ/manageiq-ui-classic/pull/142))
- Fix repeating values on Y-axis of C&U charts ([#40](https://github.com/ManageIQ/manageiq-ui-classic/pull/40))
- Floating IPs: Adds missing route for wait_for_task ([#192](https://github.com/ManageIQ/manageiq-ui-classic/pull/192))
- Fix Chart pie clicking when part of it is hidden ([#213](https://github.com/ManageIQ/manageiq-ui-classic/pull/213))
- Fixed node id for policy after coming from an event ([#256](https://github.com/ManageIQ/manageiq-ui-classic/pull/256))
- Confirmation popup is not needed on timelines screen. ([#146](https://github.com/ManageIQ/manageiq-ui-classic/pull/146))
- Fixed location of tooltip on topology screens ([#145](https://github.com/ManageIQ/manageiq-ui-classic/pull/145))
- Filter Recent VMs/Hosts charts by provider ([#144](https://github.com/ManageIQ/manageiq-ui-classic/pull/144))
- Fix missing tree view in Datastore Clusters accordion ([#129](https://github.com/ManageIQ/manageiq-ui-classic/pull/129))
- Display flash message on import/export custom report ([#125](https://github.com/ManageIQ/manageiq-ui-classic/pull/125))
- Policy Event must have at least one action assigned to it ([#112](https://github.com/ManageIQ/manageiq-ui-classic/pull/112))
- Remove unnecessary @config_tab variable ([#104](https://github.com/ManageIQ/manageiq-ui-classic/pull/104))
- Make created filters in Datastores visible ([#98](https://github.com/ManageIQ/manageiq-ui-classic/pull/98))
- Cloud Subnet: Filtering networks by ems_id ([#61](https://github.com/ManageIQ/manageiq-ui-classic/pull/61))
- Enable provision instances button via providers ([#53](https://github.com/ManageIQ/manageiq-ui-classic/pull/53))
- Fix units in C&U grouped charts ([#41](https://github.com/ManageIQ/manageiq-ui-classic/pull/41))
