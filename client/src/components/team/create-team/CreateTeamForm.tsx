"use client";

import { Accordion, Flex, Loader, Paper, Text } from "@mantine/core";
import { useCreateTeam } from "../../../hooks/useCreateTeam";
import { CreateTeamGeneralInformationForm } from "./CreateTeamGeneralInformationForm";
import { CreateTeamContactInformationForm } from "./CreateTeamContactInformationForm";
import { useState } from "react";

type Props = {
  onComplete: () => void;
};

export const CreateTeamForm = ({ onComplete }: Props) => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    "General"
  );
  const {
    generalInformationForm,
    contactInformationForm,
    createTeam,
    loading,
  } = useCreateTeam();

  const handleCreateTeam = async () => {
    const response = await createTeam();
    if (response != null) {
      onComplete();
    }
  };

  return (
    <Paper radius="md" withBorder style={{ overflow: "hidden" }}>
      <Accordion value={expandedAccordion} onChange={setExpandedAccordion}>
        <Accordion.Item value="General">
          <Accordion.Control disabled={loading} py={8}>
            {expandedAccordion === "General" ||
            !generalInformationForm.isValid() ? (
              <>
                <Text fw={500}>Team Information</Text>
                <Text size="xs" c="dimmed">
                  General team information: team name, team city, and team
                  state.
                </Text>
              </>
            ) : (
              <>
                <Text fw={500}>{generalInformationForm.values.teamName}</Text>
                <Text size="xs" c="dimmed">
                  {generalInformationForm.values.sport}
                </Text>
                <Text size="xs" c="dimmed">
                  {generalInformationForm.values.teamCity +
                    ", " +
                    generalInformationForm.values.teamState}
                </Text>
              </>
            )}
          </Accordion.Control>
          <Accordion.Panel p={10}>
            <CreateTeamGeneralInformationForm
              formDetails={generalInformationForm}
              onContinueClick={() => {
                const { hasErrors } = generalInformationForm.validate();
                if (!hasErrors) {
                  setExpandedAccordion("Contact");
                }
              }}
            />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item
          value="Contact"
          style={{ border: loading ? undefined : "none" }}
        >
          <Accordion.Control
            disabled={loading || !generalInformationForm.isValid()}
            py={10}
          >
            {expandedAccordion === "Contact" ||
            !contactInformationForm.isValid() ? (
              <>
                <Text fw={500}>Contact Information</Text>
                <Text size="xs" c="dimmed">
                  Add primary and secondary contact.
                </Text>
              </>
            ) : (
              <>
                <Text fw={500}>
                  {contactInformationForm.values.primaryContactName}
                </Text>
                <Text size="xs" c="dimmed">
                  {contactInformationForm.values.primaryContactEmail}
                </Text>
                <Text size="xs" c="dimmed">
                  {contactInformationForm.values.primaryContactPhone}
                </Text>
              </>
            )}
          </Accordion.Control>
          <Accordion.Panel p={10}>
            <CreateTeamContactInformationForm
              isLoading={loading}
              formDetails={contactInformationForm}
              onContinueClick={() => {
                setExpandedAccordion(null);
                handleCreateTeam();
              }}
            />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      {loading && (
        <Flex p={15} gap={10} align="center">
          <Loader size="xs" />
          <Text size="sm" c="dimmed">
            Creating Team
          </Text>
        </Flex>
      )}
    </Paper>
  );
};
