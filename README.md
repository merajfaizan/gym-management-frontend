# Gymnasia - Gym Class Scheduling and Membership Management System

## Project Overview

The **Gymnasia** system is designed to manage gym operations efficiently by defining roles for Admin, Trainer, and Trainee.

- **Admin**: Responsible for creating and managing trainers, scheduling classes, and assigning trainers. Admins can schedule up to 5 classes per day, each lasting 2 hours.
- **Trainer**: Trainers conduct assigned classes and can view their schedules but cannot create or manage trainee profiles.
- **Trainee**: Trainees can create/manage their profiles and book classes with a capacity limit of 10 trainees per class.

The system enforces robust business rules for scheduling, booking, and user access, with JWT-based authentication and error handling.

---

## Credentials

- Admin: { Email: admin@gmail.com , Password: 123456 }
- Trainer: { Email: trainer@gmail.com, Password: 123456 }
- Trainee: { Email: trainee@gmail.com, Password: 123456 }

## Run Locally

Clone the project

```bash
  https://github.com/merajfaizan/gym-management-frontend.git
  cd gymnasia
```

Go to the project directory

```bash
  cd gymnasia
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Demo

Live Link [https://merajfaizan.vercel.app/]

## Documentation

For Backend code visit my this repo

[Backend repo](https://github.com/merajfaizan/gym-management-backend)
