// Enum টাইপের উদাহরণ:

enum Status {
   Pending,   // 0
   Approved,  // 1
   Rejected,  // 2
 }
 
 console.log(Status.Pending);   // Output: 0
 console.log(Status.Rejected);  // Output: 2
//  Custom Numeric Values:
 enum CustomStatus {
   Pending = 5,
   Approved,  // 6 (অটোমেটিক্যালি বৃদ্ধি পাবে)
   Rejected,  // 7
 }
 console.log(CustomStatus["Pending"]);   // Output: 0
 console.log(CustomStatus["Rejected"]);   //Output: 2 

/* 
Enum এর ব্যবহার:
স্ট্যাটাস কোড:
*/
 enum HttpStatus {
   OK = 200,
   BadRequest = 400,
   NotFound = 404,
 }
 
 let responseStatus: HttpStatus = HttpStatus.OK;
 console.log(responseStatus); // Output: 200
 