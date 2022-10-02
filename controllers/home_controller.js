const Student = require('../models/student');
const XLSX = require('xlsx');



module.exports.home = function(req, res){
    
    // populate the post
    Student.find({} , function(err, students){
        return res.render('home', {
            title: "TechCamp | Home",
            students:  students                          //this will pass directly to display section of home.ejs
        });
        
    });
 
}

module.exports.getFile = function(req,res){
    var wb = XLSX.utils.book_new(); //new workbook
    Student.find((err,data)=>{
        if(err){
            console.log(err)
        }else{
            var temp = JSON.stringify(data);
            temp = JSON.parse(temp);
            var ws = XLSX.utils.json_to_sheet(temp);
            var down = __dirname + '/public/StudentList.xlsx' ;
           XLSX.utils.book_append_sheet(wb,ws,"sheet1");
           XLSX.writeFile(wb,down);
           res.download(down);
        
        }
    });
}
