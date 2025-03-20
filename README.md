SCIMS is a healthcare inventory management system tailored specifically for opera9ng room
(OR) nurses to assist them in eﬃciently loca9ng, tracking, and managing medical supplies
and equipment. The primary user base will be OR nurses who will be accessing the system
through mobile devices, so the design will focus on mobile-friendly features and usability.

------------------------>>>>>>>>>>        Functional Requirement Analysis

•	Search bar for supplies
o	A search bar that allows OR nurses to search for medical supplies by name or category.
o	Nurses can search for items by typing keywords.
o	The search bar will be available on every page to provide easy access.
Two main actions from search results:
•	Click to View Information: Clicking an item shows detailed information about the supply (e.g., description, specifications).
•	Add to Cart ("+"): Clicking the "+" symbol adds the item to the cart.

•	Multi-Name Search Option
o	The system should allow multiple names (aliases or part names) to be entered to search for the same item.
o	Nurses should be able to input different variations of an item’s name (e.g., "scalpel," "surgical blade") to find the correct item.


•	Cart Management
o	A cart system to track items that nurses have selected.
o	The cart should display the location of each item (rooms, racks, bins).
o	Each item in the cart should have a checkbox for tracking whether it has been retrieved.
o	A "Clear Cart" button will remove all items from the cart.
o	After clearing the cart, a confirmation screen will be displayed with the option to undo the action.

•	Browse Through Racks/Bins
o	Nurses should be able to browse racks and bins to see what supplies are available in each location.
o	Clicking on a rack/bin will display the items stored there, with the option to add any supply to the cart.

•	User Access Control
o	Differentiation between admin and non-admin users.
o	Admin Accounts: Can edit, add, remove, and manage all system data, including supplies and user permissions.
o	Non-Admin Accounts: Can only read the data (view supplies, racks, and other information), with no permission to make edits.


------------------------>>>>>>>>>>        Non-Functional Requirements

1.	Performance
o	The system should be fast and responsive, with minimal load times.
o	Must support up to 100 concurrent users without significant performance degradation.
2.	Scalability
o	The system should be scalable to accommodate additional racks, bins, or supply items as the hospital or surgical center grows.
3.	Security
o	User Authentication: Ensure secure user login for both admin and non-admin accounts.
o	Data Protection: All sensitive medical and user data must be encrypted, both in transit and at rest.
o	Role-Based Access Control: Admins have full access to all data, while non-admins have read-only access.
4.	Usability
o	The system must be easy to use with minimal training required, specifically designed for the fast-paced OR environment.
o	There should be clear instructions or tooltips available to guide new users.
5.	Availability
o	The system should be available 99% of the time, ensuring it is operational during surgery shifts.
6.	Backup and Recovery
o	Regular data backups should be made to ensure that any loss of data can be quickly recovered.
