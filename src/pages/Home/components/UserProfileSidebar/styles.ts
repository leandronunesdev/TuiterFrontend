import styled from "styled-components";

export const ProfileContainer = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.5px 2px rgba(30, 41, 59, 0.04),
    0 1.5px 4px rgba(30, 41, 59, 0.04);
  border: 1px solid #f3f4f6;
  padding: 1.5rem;
  margin: 1rem;
  max-width: 280px;
  max-height: 450px;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 4px solid #3b82f6;
  margin-bottom: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.25rem;
`;

export const Username = styled.p`
  color: #6b7280;
  margin-bottom: 0.75rem;
`;

export const Bio = styled.p`
  color: #374151;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #4b5563;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const WebsiteLink = styled.a`
  color: #3b82f6;
  &:hover {
    text-decoration: underline;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  gap: 0.5rem;
`;

export const Stat = styled.div`
  flex: 1;
`;

export const StatValue = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  color: #111827;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;
