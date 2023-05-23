import express from "express";
import homecontroller from "../controllers/homecontroller";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";
import handbookController from "../controllers/handbookController";
let route = express.Router();
let intiWebRouter = (app) => {
    route.get('/', homecontroller.getHomePage);
    route.get('/crud', homecontroller.getCRUD);
    route.post('/post-crud', homecontroller.postCRUD);
    route.get('/get-crud', homecontroller.displayGetCRUD);
    route.get('/edit-crud', homecontroller.getEditCRUD);
    route.post('/put-crud', homecontroller.putCRUD);
    route.get('/delete-crud', homecontroller.deleteCRUD);

    route.post('/api/login', userController.handleLogin);
    route.get('/api/get-all-users', userController.handleGetAllUser);
    route.post('/api/create-new-user', userController.handleCreateNewUser);
    route.put('/api/edit-user', userController.handleEditUser);
    route.delete('/api/delete-user', userController.handleDeleteUser);
    route.get('/api/allcode', userController.getAllcode);

    route.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    route.get('/api/get-all-doctors', doctorController.getAllDoctors);
    route.post('/api/save-infor-doctors', doctorController.postInforDoctor);
    route.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById);
    route.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule);
    route.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate);
    route.get('/api/get-extra-infor-doctor-by-id', doctorController.getExtraInforDoctorById);
    route.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctorById);

    route.get('/api/get-list-patient-for-doctor', doctorController.getListPatientForDoctor);
    route.post('/api/send-remedy', doctorController.sendRemedy);


    route.post('/api/patient-book-appointment', patientController.postBookAppointment);
    route.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);

    route.post('/api/create-new-specialty', specialtyController.createSpecialty);
    route.get('/api/get-specialty', specialtyController.getAllSpecialty);
    route.get('/api/get-detail-specialty-by-id', specialtyController.getDetailSpecialtyById);

    route.post('/api/create-new-clinic', clinicController.createClinic);
    route.get('/api/get-clinic', clinicController.getAllClinic);
    route.get('/api/get-detail-clinic-by-id', clinicController.getDetailClinicById);

    route.post('/api/create-new-handbook', handbookController.createHandbook);
    route.get('/api/get-handbook', handbookController.getAllHandbook);
    route.get('/api/get-detail-handbook-by-id', handbookController.getDetailHandbookById);



    return app.use("/", route);

}
module.exports = intiWebRouter;