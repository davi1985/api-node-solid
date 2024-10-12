# GymPass Style App

## Functional Requirements (RFs)

- [ ] It must be possible to register.
- [ ] It must be possible to authenticate.
- [ ] It must be possible to obtain the profile of a logged-in user.
- [ ] It must be possible to obtain the number of check-ins performed by the logged-in user.
- [ ] It must be possible for the user to obtain their check-in history.
- [ ] It must be possible for the user to search for nearby gyms (up to 10km).
- [ ] It must be possible for the user to search for gyms by name.
- [ ] It must be possible for the user to check-in at a gym.
- [ ] It must be possible to validate a user's check-in.
- [ ] It must be possible to register a gym.

## Business Rules (RNs)

- [ ] Users should not be able to register with a duplicate email.
- [ ] Users cannot perform 2 check-ins on the same day.
- [ ] Users cannot check-in if they are not close (100m) to the gym.
- [ ] Check-in can only be validated up to 20 minutes after it is created.
- [ ] Check-in can only be validated by administrators.
- [ ] Gyms can only be registered by administrators.

## Non-Functional Requirements (RNFs)

- [ ] User passwords need to be encrypted.
- [ ] Application data needs to be persisted in a PostgreSQL database.
- [ ] All data lists need to be paginated with 20 items per page.
- [ ] Users must be identified with a JWT (JSON Web Token).
