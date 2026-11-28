// Supabase for Malawi Love SA - VIP Payments
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

export const supabase = createClient(
  'https://cotocofslfhcmeyklzrb.supabase.co',
  'sb_publishable_1Pm9aAvMes7qoie_A4FVTw_yCwX9a_R'
);

// Submit VIP Payment
export async function submitVipPayment(userId, userName, plan, amount, proofFile) {
  const fileName = userId + '_' + Date.now() + '.jpg';
  await supabase.storage.from('vip-proofs').upload(fileName, proofFile);
  const { data } = supabase.storage.from('vip-proofs').getPublicUrl(fileName);
  await supabase.from('vip_payments').insert({
    user_id: userId,
    user_name: userName,
    plan: plan,
    amount: amount,
    proof_url: data.publicUrl,
    status: 'pending'
  });
  return data.publicUrl;
}
