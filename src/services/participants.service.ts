import { insufficientBalanceForParticipant } from "errors/insufficientBalanceForParticipantError";
import { ParticipantInput } from "protocols";
import { participantsRepository } from "repositories/participants.repository";

function create(participant: ParticipantInput) {
  if (participant.balance < 1000) throw insufficientBalanceForParticipant();

  return participantsRepository.create(participant);
}

export const participantsService = {
  create,
};