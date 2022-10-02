//require Student schema
const Student = require('../models/student');


module.exports.create = async function(req ,res){
     

    try{
         let student = await Student.create({
              name : req.body.name,
              email : req.body.email,
              age : req.body.age,
              batch : req.body.batch,
              college : req.body.college,
              dscore : req.body.dscore,
              wscore : req.body.wscore,
              rscore : req.body.rscore,
              interview : req.body.interview,
              status : req.body.status,
              result : req.body.result
             
         });

         if(req.xhr){
              return res.status(200).json({
                   data: {
                        student: student
                   },
                   message : 'Student Added !!!'
              });
         }
            //   req.flash('success' , 'Student Added');
              return res.redirect('back');
    
    }catch(err){
        //  req.flash('error' , err);
         return res.redirect('back');
    }
}



// delete the entry

module.exports.destroy = async function(req , res){
    
    try{
         let student = await Student.findById(req.params.id);
              
              student.remove();


              if(req.xhr){
                   return res.status(200).json({
                        data: {
                             student_id: req.params.id
                        },
                        message : 'Student Entry Deleted Successfully'
                   });
                }

            //   req.flash('success' , 'Post Deleted');
            return res.redirect('back');
    
    }catch(err){
        //  req.flash('error' , err);
         return res.redirect('back');
    }

}