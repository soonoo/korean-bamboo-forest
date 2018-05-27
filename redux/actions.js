export const initWaitingPetitions= (petitions) => {
    return {
        type: "INIT_WAITING_PETITIONS",
        petitions: petitions,
    }
};
